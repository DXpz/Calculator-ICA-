const parametros = [
    { id: 'coliformes', label: 'Coliformes Fecales', unit: 'NMP/100mL', subindice: 0, valor: 0 },
    { id: 'ph', label: 'pH', unit: '', subindice: 0, valor: 0 },
    { id: 'dbo5', label: 'DBO5', unit: 'mg/L', subindice: 0, valor: 0 },
    { id: 'nitratos', label: 'Nitratos', unit: 'mg/L', subindice: 0, valor: 0 },
    { id: 'fosfatos', label: 'Fosfatos', unit: 'mg/L', subindice: 0, valor: 0 },
    { id: 'temperatura', label: 'Temperatura', unit: '°C', subindice: 0, valor: 0 },
    { id: 'turbidez', label: 'Turbidez', unit: 'NTU', subindice: 0, valor: 0 },
    { id: 'solidos', label: 'Sólidos Disueltos', unit: 'mg/L', subindice: 0, valor: 0 },
    { id: 'oxigeno', label: 'Oxígeno Disuelto', unit: '%', subindice: 0, valor: 0 }
];

const validationRules = {
    coliformes: { min: 0, max: 1000000 },
    ph: { min: 0, max: 14 },
    dbo5: { min: 0, max: 1000 },
    nitratos: { min: 0, max: 500 },
    fosfatos: { min: 0, max: 50 },
    temperatura: { min: -50, max: 100 },
    turbidez: { min: 0, max: 1000 },
    solidos: { min: 0, max: 5000 },
    oxigeno: { min: 0, max: 200 }
};

function mostrarNotificacion(mensaje, duracion = 5000) {
    const notificacion = document.getElementById('notificacion');
    notificacion.textContent = mensaje;
    notificacion.classList.add('mostrar');

    setTimeout(() => {
        notificacion.classList.remove('mostrar');
    }, duracion);
}

function validarEntradas() {
    let errores = [];

    parametros.forEach(param => {
        const input = document.getElementById(param.id);
        input.classList.remove('input-error');
        const valor = parseFloat(input.value);
        param.valor = valor;  // Actualizar valor en el objeto

        if (isNaN(valor)) {
            errores.push(`Campo requerido: ${param.label}`);
            input.classList.add('input-error');
            return;
        }

        const regla = validationRules[param.id];
        if (valor < regla.min || valor > regla.max) {
            errores.push(`${param.label} debe estar entre ${regla.min} y ${regla.max}`);
            input.classList.add('input-error');
        }
    });

    if (errores.length > 0) {
        mostrarNotificacion(errores.join('\n'));
        return false;
    }

    return true;
}

function calcularICA() {
    // Limpiar estado previo
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    document.getElementById('resultado').className = 'result';

    if (!validarEntradas()) return;

    // Calcular subíndices
    parametros[0].subindice = parametros[0].valor > 100000 ? 3 : interpolate(parametros[0].valor, [0, 100000], [100, 3]);
    parametros[1].subindice = parametros[1].valor <= 2 ? 2 : parametros[1].valor >= 10 ? 3 : interpolate(parametros[1].valor, [2, 10], [100, 3]);
    parametros[2].subindice = parametros[2].valor > 30 ? 2 : interpolate(parametros[2].valor, [0, 30], [100, 2]);
    parametros[3].subindice = parametros[3].valor > 100 ? 2 : interpolate(parametros[3].valor, [0, 100], [100, 2]);
    parametros[4].subindice = parametros[4].valor > 10 ? 5 : interpolate(parametros[4].valor, [0, 10], [100, 5]);
    parametros[5].subindice = parametros[5].valor > 15 ? 9 : interpolate(parametros[5].valor, [0, 15], [100, 9]);
    parametros[6].subindice = parametros[6].valor > 100 ? 5 : interpolate(parametros[6].valor, [0, 100], [100, 5]);
    parametros[7].subindice = parametros[7].valor > 500 ? 3 : interpolate(parametros[7].valor, [0, 500], [100, 3]);
    parametros[8].subindice = parametros[8].valor > 140 ? 47 : interpolate(parametros[8].valor, [0, 140], [100, 47]);

    // Validaciones técnicas adicionales
    if (parametros[1].valor < 6.5 || parametros[1].valor > 8.5) {
        mostrarNotificacion('Advertencia: pH fuera del rango recomendado para agua potable', 7000);
    }

    if (parametros[8].valor < 90) {
        mostrarNotificacion('Advertencia: Nivel de oxígeno disuelto bajo', 7000);
    }

    // Calcular ICA
    const pesos = [0.15, 0.12, 0.10, 0.10, 0.10, 0.10, 0.08, 0.08, 0.17];
    const ica = parametros.reduce((acc, param, i) => acc + (param.subindice * pesos[i]), 0);

    mostrarResultado(ica);
    generarGraficas();
}

function mostrarResultado(ica) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Índice de Calidad del Agua (ICA): ${ica.toFixed(2)}`;

    const clasificaciones = [
        { limite: 91, clase: 'excelente', texto: 'Excelente' },
        { limite: 71, clase: 'buena', texto: 'Buena' },
        { limite: 51, clase: 'regular', texto: 'Regular' },
        { limite: 26, clase: 'mala', texto: 'Mala' },
        { limite: -Infinity, clase: 'pesima', texto: 'Pésima' }
    ];

    const clasificacion = clasificaciones.find(c => ica >= c.limite);
    resultadoDiv.classList.add(clasificacion.clase);
    resultadoDiv.innerHTML += `<br>Clasificación: ${clasificacion.texto}`;
}

function generarGraficas() {
    const container = document.getElementById('chartsContainer');
    container.innerHTML = '';

    parametros.forEach((param, index) => {
        const chartId = `chart${index}`;
        container.insertAdjacentHTML('beforeend', `
            <div class="chart-container">
                <h3>${param.label}</h3>
                <p>Valor: ${param.valor} ${param.unit}</p>
                <div class="chart-box">
                    <canvas id="${chartId}"></canvas>
                </div>
            </div>
        `);

        new Chart(document.getElementById(chartId).getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Subíndice'],
                datasets: [{
                    label: `Subíndice ICA (${param.subindice.toFixed(1)})`,
                    data: [param.subindice],
                    backgroundColor: getColorForSubindice(param.subindice),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true, max: 100 } }
            }
        });
    });
}

function getColorForSubindice(value) {
    const escalas = [
        { limite: 90, color: '#4CAF50' },
        { limite: 70, color: '#FFC107' },
        { limite: 50, color: '#FFA500' },
        { limite: 25, color: '#FF5722' },
        { limite: -Infinity, color: '#F44336' }
    ];
    return escalas.find(e => value >= e.limite).color;
}

function interpolate(value, rangeX, rangeY) {
    const slope = (rangeY[1] - rangeY[0]) / (rangeX[1] - rangeX[0]);
    return Math.min(Math.max(rangeY[0] + slope * (value - rangeX[0]), rangeY[1]), rangeY[0]);
}