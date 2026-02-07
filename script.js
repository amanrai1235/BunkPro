function calcCurrent() {
    const total = Number(document.getElementById("totalLectures").value);
    const present = Number(document.getElementById("presentLectures").value);
    const result = document.getElementById("currentResult");

    if (total <= 0 || present < 0 || present > total) {
        result.innerText = "Attendance: Invalid input";
        return;
    }

    const percent = ((present / total) * 100).toFixed(2);
    result.innerText = `Attendance: ${percent}%`;
}

function calcFuture() {
    const currentTotal = Number(document.getElementById("totalLectures").value);
    const currentPresent = Number(document.getElementById("presentLectures").value);

    const days = Number(document.getElementById("workingDays").value);
    const lecPerDay = Number(document.getElementById("lecPerDay").value);
    const planAttend = Number(document.getElementById("planAttend").value);

    if (currentTotal <= 0) return;

    const futureTotal = days * lecPerDay;
    const futurePresent = days * planAttend;

    const finalTotal = currentTotal + futureTotal;
    const finalPresent = currentPresent + futurePresent;
    const percent = ((finalPresent / finalTotal) * 100).toFixed(2);

    document.getElementById("projectionCard").style.display = "block";

    document.getElementById("pCurrentTotal").innerText = currentTotal;
    document.getElementById("pFutureTotal").innerText = futureTotal;
    document.getElementById("pFinalTotal").innerText = finalTotal;
    document.getElementById("pCurrentPresent").innerText = currentPresent;
    document.getElementById("pFuturePresent").innerText = futurePresent;
    document.getElementById("pFinalPresent").innerText = finalPresent;

    document.getElementById("projectedPercent").innerText = percent + "%";
    document.getElementById("progressBar").style.width = percent + "%";

    document.getElementById("totalPresentText").innerText = finalPresent;
    document.getElementById("totalAbsentText").innerText =
        finalTotal - finalPresent;
}
