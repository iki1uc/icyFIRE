<c>
    <crystal>ICE.state = "kristall"</crystal>
    <idea>vorhaben.init()</idea>
    <focus>struktur.clear()</focus>
</c>
<script>
const D = window.ICE_DATA;

// Beispiel: Shine‑Achsen
const shine = D.OSF_VECTOR.DIR();

// Beispiel: QI/IQQ Licht
const qi = D.QI;
const iqq = D.IQQ;

// Beispiel: 756 Achsen
const axes = [];
for (let i=0; i<756; i++){
    axes.push({
        x: Math.sin(i * 0.01) * shine.dx,
        y: Math.cos(i * 0.01) * shine.dy,
        z: Math.sin(i * 0.02) * shine.dz
    });
}
</script>
