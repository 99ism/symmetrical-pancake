function calculateBias() {
    const fabricWidth = parseFloat(document.getElementById("fabricWidth").value) || 0;
    const cutAngle = parseFloat(document.getElementById("cutAngle").value) || 0;
    const tapingWidth = parseFloat(document.getElementById("tapingWidth").value) || 0;
    const tapingRequirement = parseFloat(document.getElementById("tapingRequirement").value) || 0;
    const quantity = parseInt(document.getElementById("quantity").value, 10) || 0;

    // Konversi sudut dari derajat ke radian
    const angleInRadians = (cutAngle * Math.PI) / 180;

    if (cutAngle === 0 || fabricWidth === 0) {
        // Jika input tidak lengkap, kosongkan hasil
        document.getElementById("resultTapingLength").textContent = "Panjang Taping: -";
        document.getElementById("resultTotalTapingWidth").textContent = "Lebar Taping Total: -";
        document.getElementById("resultBiasLength").textContent = "Panjang Kain Serong: -";
        document.getElementById("resultTotalFabricLength").textContent = "Panjang Total Kain: -";
        return;
    }

    // Perhitungan
    const tapingLength = fabricWidth / Math.cos(angleInRadians);
    const totalTapingWidth = ((quantity * tapingRequirement) / tapingLength) * tapingWidth;
    const biasLength = totalTapingWidth / Math.cos(angleInRadians);
    const totalFabricLength = (tapingLength * Math.sin(angleInRadians)) + biasLength;

    // Update hasil
    document.getElementById("resultTapingLength").textContent = `Panjang Taping: ${tapingLength.toFixed(2)} cm`;
    document.getElementById("resultTotalTapingWidth").textContent = `Lebar Taping Total: ${totalTapingWidth.toFixed(2)} cm`;
    document.getElementById("resultBiasLength").textContent = `Panjang Kain Serong: ${biasLength.toFixed(2)} cm`;
    document.getElementById("resultTotalFabricLength").textContent = `Panjang Total Kain: ${totalFabricLength.toFixed(2)} cm`;
}

// Tambahkan event listener pada semua input untuk memperbarui hasil secara otomatis
const inputs = document.querySelectorAll("#biasCalculator input");
inputs.forEach(input => {
    input.addEventListener("input", calculateBias);
});
