<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" width="80" style="margin: 0 15px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" width="80" style="margin: 0 15px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" width="80" style="margin: 0 15px;">
</div>

> [!IMPORTANT]
> Para poder visualizar nuestra calculadora sin ningun problema se tienen que descargar los 3 archivos de la carpeta (ICA).

# Hoja metodológica para el cálculo del Índice de Calidad de Agua (ICA)

## Nombre del indicador

**Índice de Calidad del Agua (ICA)**

## Definición

Muestra la calidad del agua presente en los cuerpos de agua superficial del país, de acuerdo con los parámetros y valores guías propuestos por el <a href="https://www.ambiente.gob.sv/" target="_blank">MARN</a>.

El "ICA" adopta para condiciones óptimas un valor máximo determinado de 100, que va disminuyendo con el aumento de la contaminación del curso de agua en estudio.

---

## Fórmula de cálculo

Para determinar el valor del "ICA" en un punto deseado es necesario que se tengan las mediciones de los 9 parámetros implicados en el cálculo del índice:

- Coliformes fecales
- pH
- DBO₅
- Nitratos
- Fosfatos
- Cambio de Temperatura
- Turbidez
- Sólidos Disueltos Totales
- Oxígeno Disuelto

La evaluación numérica del "ICA" se calcula mediante la siguiente fórmula:

$$
ICA = \sum_{i=1}^{9} (Sub_i \times w_i)
$$

Donde:
- $Sub_i$ = Valor del subíndice para el parámetro i
- $w_i$ = Peso asignado al parámetro i

---

## Tabla de ponderaciones

| #  | Parámetro                      | Peso (w<sub>i</sub>) |
|----|--------------------------------|----------------|
| 1  | Coliformes Fecales            | 0.15           |
| 2  | pH                             | 0.12           |
| 3  | DBO₅                           | 0.10           |
| 4  | Nitratos                       | 0.10           |
| 5  | Fosfatos                       | 0.10           |
| 6  | Cambio de Temperatura          | 0.10           |
| 7  | Turbidez                       | 0.08           |
| 8  | Sólidos Disueltos Totales      | 0.08           |
| 9  | Saturación de Oxígeno Disuelto | 0.17           |

---

## Procedimiento para calcular los subíndices (Sub<sub>i</sub>)

### 1. **Coliformes Fecales**
- Si > 100,000 NMP/100 mL ➔ Sub₁ = 3
- Si ≤ 100,000 ➔ Interpolar entre 0-100,000 (Sub₁ = 100 a 3)

### 2. **pH**
- Si ≤ 2 ➔ Sub₂ = 2
- Si ≥ 10 ➔ Sub₂ = 3
- Entre 2-10 ➔ Interpolar (Sub₂ = 100 a 3)

### 3. **DBO₅**
- Si > 30 mg/L ➔ Sub₃ = 2
- Si ≤ 30 mg/L ➔ Interpolar entre 0-30 (Sub₃ = 100 a 2)

### 4. **Nitratos**
- Si > 100 mg/L ➔ Sub₄ = 2
- Si ≤ 100 mg/L ➔ Interpolar entre 0-100 (Sub₄ = 100 a 2)

### 5. **Fosfatos**
- Si > 10 mg/L ➔ Sub₅ = 5
- Si ≤ 10 mg/L ➔ Interpolar entre 0-10 (Sub₅ = 100 a 5)

### 6. **Cambio de Temperatura**
- Si ΔT > 15°C ➔ Sub₆ = 9
- Si ≤ 15°C ➔ Interpolar entre 0-15 (Sub₆ = 100 a 9)

### 7. **Turbidez**
- Si > 100 NTU ➔ Sub₇ = 5
- Si ≤ 100 NTU ➔ Interpolar entre 0-100 (Sub₇ = 100 a 5)

### 8. **Sólidos Disueltos Totales**
- Si > 500 mg/L ➔ Sub₈ = 3
- Si ≤ 500 mg/L ➔ Interpolar entre 0-500 (Sub₈ = 100 a 3)

### 9. **Oxígeno Disuelto**
- Si > 140% ➔ Sub₉ = 47
- Si ≤ 140% ➔ Interpolar entre 0-140 (Sub₉ = 100 a 47)

---

## Clasificación del ICA


| Rango ICA | Clasificación | Color (Hex)  | Muestra                  |
|-----------|---------------|--------------|--------------------------|
| 91-100    | Excelente     | `#4CAF50`    | 🟢                       |
| 71-90     | Buena         | `#FFC107`    | 🟠                       |
| 51-70     | Regular       | `#FFA500`    | 🟠                       |
| 26-50     | Mala          | `#FF5722`    | 🔴                       |
| 0-25      | Pésima        | `#F44336`    | 🔴                       |


---

## Fuentes de datos

- <a href="https://www.ambiente.gob.sv/" target="_blank">Ministerio de Medio Ambiente y Recursos Naturales (MARN)</a>
