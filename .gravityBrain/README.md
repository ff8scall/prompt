# PromptFlow Strategy Docs

`prompt.lego-sia.com`은 사용자가 프롬프트 자체가 아니라 원하는 시각 결과물을 먼저 탐색한다는 가설에서 출발한 Visual-first 프롬프트 라이브러리입니다.

## Core Constraint

사용자는 사이트 안에서 직접 AI 모델 API를 호출하지 않습니다.

- 사용자는 프롬프트를 복사하고 수정할 수 있습니다.
- 사용자는 우리가 미리 생성하고 검증한 이미지, 프롬프트, 변형 결과를 탐색할 수 있습니다.
- 사용자는 사이트에서 Midjourney, DALL-E, Stable Diffusion, Runway 등 외부 모델을 직접 호출할 수 없습니다.
- 사용자는 본인의 API 키를 연결하지 않습니다.

## Documents

- [PromptFlow Grand Strategy](./PROMPTFLOW_GRAND_STRATEGY.md)
- [AI Content Production System](./AI_CONTENT_PRODUCTION_SYSTEM.md)

## Strategic Summary

PromptFlow는 Pinterest의 시각적 탐색 경험과 GitHub Gist의 실용적인 복사/재사용 경험을 결합합니다. 핵심 경쟁자는 다른 프롬프트 사이트만이 아니라 Discord 검색, Midjourney 커뮤니티 피드 스크롤, YouTube 튜토리얼, 개인 메모장처럼 사용자가 이미 쓰고 있는 대체 행동입니다.

초기 MVP는 실시간 생성 기능보다 검증된 시드 라이브러리, 결과물 중심 탐색, 프롬프트 복사, 변수 가이드, 모델별 노트, pSEO 페이지 품질에 집중합니다.
