async function convert() {
    const amount = document.getElementById("amount").value;
    const src = document.getElementById("src").value;
    const dst = document.getElementById("dst").value;

    if (!amount) {
        alert("금액을 입력하세요");
        return;
    }

    try {
        const res = await fetch(
            `/convert?amount=${encodeURIComponent(amount)}&from_currency=${src}&to_currency=${dst}`
        );

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.detail || "서버 오류");
        }

        const data = await res.json();

        document.getElementById("result").innerText =
            `${data.amount} ${data.from} → ${data.result} ${data.to}`;

        document.getElementById("updatedAt").innerText =
            `기준 통화: ${data.base}, 업데이트: ${data.updated_at}`;

    } catch (e) {
        console.error(e);
        alert(e.message);
    }
}