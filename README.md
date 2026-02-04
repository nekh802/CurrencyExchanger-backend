💱 Currency Exchanger Backend

FastAPI 기반의 환율 계산 API 서버입니다.
외부 환율 API를 사용해 실시간 환율을 조회하고,
프론트엔드(Vercel)에서 호출하여 환율 변환 결과를 제공합니다.

🔧 Tech Stack
- Python 3
- FastAPI
- Uvicorn
- Docker (Render 배포)
- REST API

📁 Project Structure
backend/
├── api_server.py      # FastAPI 엔트리 포인트
├── Core.py            # 환율 계산 로직
├── rates_api.py       # 외부 환율 API 호출
├── requirements.txt
├── Procfile
└── static/

🚀 API Endpoints
GET /convert

환율 변환 요청

Query Parameters
Name	Type	Description
from_currency	string	기준 통화 (예: USD)
to_currency	string	대상 통화 (예: KRW)
amount	number	변환할 금액
Example Request
GET /convert?from_currency=USD&to_currency=KRW&amount=1

Example Response
{
  "from": "USD",
  "to": "KRW",
  "amount": 1,
  "result": 1332.45,
  "base": "USD",
  "updated_at": 1707033600
}

🌐 API Documentation

FastAPI의 자동 문서 기능을 제공합니다.

/docs


배포된 서버 기준 예:

https://<backend-domain>.onrender.com/docs

🔐 CORS Configuration

프론트엔드(Vercel)에서 접근 가능하도록 CORS 설정이 되어 있습니다.
'''
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 테스트용
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
'''
⚠️ 운영 환경에서는 allow_origins를 특정 도메인으로 제한하는 것을 권장합니다.

🛠 Local Development
1️⃣ Install Dependencies
pip install -r requirements.txt

2️⃣ Run Server
uvicorn api_server:app --reload

3️⃣ Test
http://127.0.0.1:8000/docs

☁️ Deployment
- Render를 사용하여 배포
- GitHub push 시 자동 배포
- Docker 기반 실행
Render 무료 플랜 특성상 첫 요청 시 서버가 깨워지는 데 시간이 걸릴 수 있습니다.

🔗 Related Projects
- Frontend: React + Vite (Vercel)
- Live Demo: Vercel 배포 링크 제공

✨ Notes
환율 데이터는 외부 API에 의존하므로 응답 시간이 변동될 수 있습니다.
API 안정성을 위해 예외 처리 및 기본 검증 로직이 포함되어 있습니다.

👤 Author
GitHub: https://github.com/nekh802
