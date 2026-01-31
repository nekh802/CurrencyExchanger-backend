FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Render가 PORT 환경변수 주는 경우가 많아서 포트는 환경변수 우선으로 받는 게 안전
CMD ["bash", "-lc", "uvicorn api_server:app --host 0.0.0.0 --port ${PORT:-8000}"]