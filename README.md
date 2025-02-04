# Hoja metodológica para el cálculo del Índice de Calidad de Agua (ICA)

## Nombre del indicador

Índice de Calidad del Agua (ICA)

## Definición

Muestra la calidad del agua presente en los cuerpos de agua superficial del país, de acuerdo con los parámetros y valores guías propuestos por el MARN.

El "ICA" adopta para condiciones óptimas un valor máximo determinado de 100, que va disminuyendo con el aumento de la contaminación del curso de agua en estudio.

---

## Fórmula de cálculo

Para determinar el valor del "ICA" en un punto deseado es necesario que se tengan las mediciones de los 9 parámetros implicados en el cálculo del índice:

- Coliformes fecales
- pH
- DBO<sub>5</sub>
- Nitratos
- Fosfatos
- Cambio de Temperatura
- Turbidez
- Sólidos Disueltos Totales
- Oxígeno Disuelto

La evaluación numérica del "ICA", con técnicas multiplicativas y ponderadas con la asignación de pesos específicos, se debe a Brown. Para calcular el Índice de Brown se puede utilizar una suma lineal ponderada de los subíndices que se expresan matemáticamente como sigue:

$$
ICA = \sum_{i=1}^{9} (Sub<sub>i</sub> \times w<sub>i</sub>)
$$

---

## Tabla de ponderaciones

| i  | Subíndice ($ Sub<sub>i</sub> $)          | Peso ($ w<sub>i</sub> $) |
|----|--------------------------------|----------------|
| 1  | Coliformes Fecales            | 0.15           |
| 2  | pH                             | 0.12           |
| 3  | DBO<sub>5</sub>                           | 0.10           |
| 4  | Nitratos                       | 0.10           |
| 5  | Fosfatos                       | 0.10           |
| 6  | Cambio de Temperatura          | 0.10           |
| 7  | Turbidez                       | 0.08           |
| 8  | Sólidos Disueltos Totales      | 0.08           |
| 9  | Saturación de Oxígeno Disuelto | 0.17           |

---

## Procedimiento para calcular los subíndices ($ Sub<sub>i</sub> $)

### 1. **Coliformes Fecales**
- Si los coliformes fecales son mayores de 100,000 NMP/100 mL, $ Sub<sub>1</sub> = 3 $.
- Si son menores, interpolar en la Figura 1 para encontrar $ Sub<sub>1</sub> $.

### 2. **pH**
- Si el pH ≤ 2, $ Sub<sub>2</sub> = 2 $.
- Si el pH ≥ 10, $ Sub<sub>2</sub> = 3 $.
- Para valores entre 2 y 10, interpolar en la Figura 2.

### 3. **DBO<sub>5</sub>**
- Si DBO<sub>5</sub> > 30 mg/L, $ Sub<sub>3</sub> = 2 $.
- Si DBO<sub>5</sub> ≤ 30 mg/L, interpolar en la Figura 3.

### 4. **Nitratos**
- Si Nitratos > 100 mg/L, $ Sub<sub>4</sub> = 2 $.
- Si Nitratos ≤ 100 mg/L, interpolar en la Figura 4.

### 5. **Fosfatos**
- Si Fosfatos > 10 mg/L, $ Sub<sub>5</sub> = 5 $.
- Si Fosfatos ≤ 10 mg/L, interpolar en la Figura 5.

### 6. **Cambio de Temperatura**
- Calcular la diferencia de temperatura entre dos puntos de monitoreo.
- Si ΔT > 15°C, $ Sub<sub>6</sub> = 9 $.
- Si ΔT ≤ 15°C, interpolar en la Figura 6.

### 7. **Turbidez**
- Si Turbidez > 100 NTU, $ Sub<sub>7</sub> = 5 $.
- Si Turbidez ≤ 100 NTU, interpolar en la Figura 7.

### 8. **Sólidos Disueltos Totales**
- Si Sólidos Disueltos Totales > 500 mg/L, $ Sub<sub>8</sub> = 3 $.
- Si ≤ 500 mg/L, interpolar en la Figura 8.

### 9. **Saturación de Oxígeno Disuelto**
- Calcular el % de saturación de oxígeno disuelto según la temperatura (ver Tabla 1).
- Si %OD > 140%, $ Sub<sub>9</sub> = 47 $.
- Si ≤ 140%, interpolar en la Figura 9.

---

## Clasificación del ICA

| Rango de ICA | Clasificación | Color   |
|--------------|---------------|---------|
| 0–25         | Pésima        | Rojo    |
| 26–50        | Mala          | Naranja |
| 51–70        | Regular       | Amarillo|
| 71–90        | Buena         | Verde   |
| 91–100       | Excelente     | Azul    |

---

## Interpretación del indicador

- **Buenas o Excelentes**: Aguas con alta diversidad de vida acuática y aptas para contacto directo.
- **Regular**: Menor diversidad de organismos acuáticos y crecimiento frecuente de algas.
- **Mala**: Baja diversidad de vida acuática y problemas de contaminación.
- **Pésima**: Solo soporta formas limitadas de vida acuática.

---

## Unidades de medida de las variables

| Parámetro                  | Unidad de Medida       |
|----------------------------|------------------------|
| Coliformes fecales         | NMP/100 mL            |
| pH                         | Unidades de pH        |
| DBO<sub>5</sub>                       | mg/L                  |
| Nitratos                   | mg/L                  |
| Fosfatos                   | mg/L                  |
| Cambio de Temperatura      | °C                    |
| Turbidez                   | NTU                   |
| Sólidos Disueltos Totales  | mg/L                  |
| Oxígeno Disuelto           | % de saturación       |

---

## Fuentes de datos

- Ministerio de Medio Ambiente y Recursos Naturales (MARN).
