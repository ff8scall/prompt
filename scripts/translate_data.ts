import { Project, SyntaxKind, ObjectLiteralExpression, PropertyAssignment, ArrayLiteralExpression, StringLiteral } from 'ts-morph';
import { translate } from '@vitalets/google-translate-api';
import fs from 'fs';

const project = new Project();
project.addSourceFilesAtPaths('lib/data/*.ts');

const TARGET_FIELDS = [
  'title', 'result_first_title', 'short_description', 'emotional_hook', 
  'comparison_notes'
];
const ARRAY_FIELDS = ['use_cases', 'why_this_works', 'common_failure_modes'];

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function translateText(text: string): Promise<string> {
  if (!text) return text;
  // Skip if it's already in Korean or too short
  if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(text)) return text;
  
  try {
    await sleep(1000); // 1 second delay between requests
    const res = await translate(text, { to: 'ko' });
    return res.text;
  } catch (err) {
    console.error('Translation error:', err);
    return text;
  }
}

async function processObject(obj: ObjectLiteralExpression) {
  for (const field of TARGET_FIELDS) {
    const koField = `${field}_ko`;
    if (!obj.getProperty(koField) && obj.getProperty(field)) {
      const prop = obj.getProperty(field) as PropertyAssignment;
      const init = prop.getInitializerIfKind(SyntaxKind.StringLiteral);
      if (init) {
        const text = init.getLiteralValue();
        console.log(`Translating: ${text}`);
        const translated = await translateText(text);
        obj.addPropertyAssignment({ name: koField, initializer: JSON.stringify(translated) });
      }
    }
  }

  for (const field of ARRAY_FIELDS) {
    const koField = `${field}_ko`;
    if (!obj.getProperty(koField) && obj.getProperty(field)) {
      const prop = obj.getProperty(field) as PropertyAssignment;
      const init = prop.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
      if (init) {
        const elements = init.getElements();
        const translatedElements = [];
        for (const el of elements) {
          if (el.getKind() === SyntaxKind.StringLiteral) {
            const text = (el as StringLiteral).getLiteralValue();
            console.log(`Translating array item: ${text}`);
            const translated = await translateText(text);
            translatedElements.push(JSON.stringify(translated));
          } else {
            translatedElements.push(el.getText());
          }
        }
        obj.addPropertyAssignment({ name: koField, initializer: `[${translatedElements.join(', ')}]` });
      }
    }
  }

  // Handle nested variables
  const varsProp = obj.getProperty('variables') as PropertyAssignment;
  if (varsProp) {
    const varsInit = varsProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
    if (varsInit) {
      for (const el of varsInit.getElements()) {
        if (el.getKind() === SyntaxKind.ObjectLiteralExpression) {
          await processVariables(el as ObjectLiteralExpression);
        }
      }
    }
  }

  // Handle nested model_notes
  const notesProp = obj.getProperty('model_notes') as PropertyAssignment;
  if (notesProp) {
    const notesInit = notesProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
    if (notesInit) {
      for (const el of notesInit.getElements()) {
        if (el.getKind() === SyntaxKind.ObjectLiteralExpression) {
          await processModelNotes(el as ObjectLiteralExpression);
        }
      }
    }
  }

  // Handle nested variations
  const varsObjProp = obj.getProperty('variations') as PropertyAssignment;
  if (varsObjProp) {
    const varsObjInit = varsObjProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
    if (varsObjInit) {
      for (const el of varsObjInit.getElements()) {
        if (el.getKind() === SyntaxKind.ObjectLiteralExpression) {
          await processVariations(el as ObjectLiteralExpression);
        }
      }
    }
  }

  // Handle seo
  const seoProp = obj.getProperty('seo') as PropertyAssignment;
  if (seoProp) {
    const seoInit = seoProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (seoInit) {
      await processSeo(seoInit);
    }
  }

  // Handle asset_metadata
  const assetProp = obj.getProperty('asset_metadata') as PropertyAssignment;
  if (assetProp) {
    const assetInit = assetProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (assetInit) {
      await processAsset(assetInit);
    }
  }
}

async function processVariables(obj: ObjectLiteralExpression) {
  for (const field of ['name', 'variable_behavior_note']) {
    const koField = `${field}_ko`;
    if (!obj.getProperty(koField) && obj.getProperty(field)) {
      const prop = obj.getProperty(field) as PropertyAssignment;
      const init = prop.getInitializerIfKind(SyntaxKind.StringLiteral);
      if (init) {
        const text = init.getLiteralValue();
        const translated = await translateText(text);
        obj.addPropertyAssignment({ name: koField, initializer: JSON.stringify(translated) });
      }
    }
  }
}

async function processModelNotes(obj: ObjectLiteralExpression) {
  for (const field of ['note']) {
    const koField = `${field}_ko`;
    if (!obj.getProperty(koField) && obj.getProperty(field)) {
      const prop = obj.getProperty(field) as PropertyAssignment;
      const init = prop.getInitializerIfKind(SyntaxKind.StringLiteral);
      if (init) {
        const text = init.getLiteralValue();
        const translated = await translateText(text);
        obj.addPropertyAssignment({ name: koField, initializer: JSON.stringify(translated) });
      }
    }
  }
}

async function processVariations(obj: ObjectLiteralExpression) {
  for (const field of ['label', 'use_case']) {
    const koField = `${field}_ko`;
    if (!obj.getProperty(koField) && obj.getProperty(field)) {
      const prop = obj.getProperty(field) as PropertyAssignment;
      const init = prop.getInitializerIfKind(SyntaxKind.StringLiteral);
      if (init) {
        const text = init.getLiteralValue();
        const translated = await translateText(text);
        obj.addPropertyAssignment({ name: koField, initializer: JSON.stringify(translated) });
      }
    }
  }
}

async function processSeo(obj: ObjectLiteralExpression) {
  for (const field of ['meta_title', 'meta_description']) {
    const koField = `${field}_ko`;
    if (!obj.getProperty(koField) && obj.getProperty(field)) {
      const prop = obj.getProperty(field) as PropertyAssignment;
      const init = prop.getInitializerIfKind(SyntaxKind.StringLiteral);
      if (init) {
        const text = init.getLiteralValue();
        const translated = await translateText(text);
        obj.addPropertyAssignment({ name: koField, initializer: JSON.stringify(translated) });
      }
    }
  }
}

async function processAsset(obj: ObjectLiteralExpression) {
  for (const field of ['alt_text']) {
    const koField = `${field}_ko`;
    if (!obj.getProperty(koField) && obj.getProperty(field)) {
      const prop = obj.getProperty(field) as PropertyAssignment;
      const init = prop.getInitializerIfKind(SyntaxKind.StringLiteral);
      if (init) {
        const text = init.getLiteralValue();
        const translated = await translateText(text);
        obj.addPropertyAssignment({ name: koField, initializer: JSON.stringify(translated) });
      }
    }
  }
}

async function main() {
  const files = project.getSourceFiles();
  for (const file of files) {
    console.log(`Processing ${file.getBaseName()}...`);
    const vars = file.getVariableDeclarations();
    for (const v of vars) {
      const init = v.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
      if (init) {
        await processObject(init);
      }
    }
    file.saveSync();
  }
  console.log('Done!');
}

main().catch(console.error);
