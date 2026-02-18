
import React from 'react';
import { Activity } from './types';
import { IconDetective, IconBook, IconColors, IconMuseum } from './components/Icons';

export const ACTIVITIES: Activity[] = [
  {
    id: 'act1',
    title: 'Detectives de frases',
    type: 'Inicio',
    objective: 'Identificar estereotipos en el lenguaje cotidiano y desarrollar pensamiento crítico.',
    description: [
      'Asamblea inicial: Un títere llamado "Leo" llega llorando porque le han dicho que "los niños no lloran".',
      'Debate guiado: ¿Por qué no va a poder llorar Leo? ¿Quién más llora? ¿Cuándo lloramos?',
      'Juego de clasificación: Repartimos tarjetas con frases. Si la frase nos deja ser libres (Verde), si nos hace dudar (Amarillo) o si nos cierra puertas (Rojo).',
      'Creación del Mural: Pegamos las frases en el "Semáforo del lenguaje" del aula.'
    ],
    timing: '1 sesión (45 min)',
    space: 'Aula (Asamblea)',
    grouping: 'Gran grupo',
    evaluation: 'Capacidad para identificar frases limitantes y expresar sentimientos.',
    color: 'sky',
    icon: <IconDetective />,
    materials: ['Títere', 'Tarjetas de colores', 'Cartulina para el semáforo', 'Pegamento'],
    adaptations: 'Para alumnos con dificultades de comunicación, usar apoyos visuales ARASAAC para representar emociones.'
  },
  {
    id: 'act2',
    title: 'Cuento al revés, cuento de verdad',
    type: 'Desarrollo',
    objective: 'Cuestionar los roles de género en la literatura infantil clásica y moderna.',
    description: [
      'Lectura de "Las princesas también se tiran pedos" o "Rosa Caramelo".',
      'Taller de "Cambio de Gafas": Repartimos unas gafas de cartón decoradas. Al ponérnoslas, vemos el cuento al revés.',
      'Dramatización: Los niños rescatan a los príncipes, las niñas son las valientes aventureras.',
      'Reflexión final: ¿Qué nos ha gustado más de ser los otros personajes?'
    ],
    timing: '2 sesiones (30 min cada una)',
    space: 'Biblioteca de aula',
    grouping: 'Pequeño grupo y gran grupo',
    evaluation: 'Interés por participar en roles no estereotipados.',
    color: 'rose',
    icon: <IconBook />,
    materials: ['Cuentos coeducativos', 'Gafas de cartulina', 'Disfraces variados', 'Cámara de fotos'],
    adaptations: 'Seleccionar cuentos con lenguaje sencillo y estructura repetitiva para facilitar la comprensión.'
  },
  {
    id: 'act3',
    title: 'Rincones sin etiquetas',
    type: 'Desarrollo',
    objective: 'Promover el juego simbólico libre de sesgos sexistas.',
    description: [
      'Re-estructuración de rincones: Mezclamos materiales. En la cocina hay herramientas, en el taller hay bebés.',
      'Misión Semanal: Cada día un grupo tiene el reto de usar materiales que "normalmente no usa".',
      'Registro fotográfico: Hacemos fotos de las construcciones y juegos compartidos.',
      'Asamblea de cierre: Explicamos qué hemos descubierto en el rincón nuevo.'
    ],
    timing: '4 sesiones (Tiempo de rincones)',
    space: 'Aula dividida por zonas',
    grouping: 'Equipos de 5-6 niños',
    evaluation: 'Frecuencia de elección de rincones tradicionalmente asociados al otro género.',
    color: 'emerald',
    icon: <IconColors />,
    materials: ['Herramientas de juguete', 'Bebés y accesorios', 'Bloques de construcción', 'Panel de registro'],
    adaptations: 'Asegurar que los materiales sean accesibles físicamente para todos los alumnos.'
  },
  {
    id: 'act4',
    title: 'Museo vivo de las profesiones',
    type: 'Cierre',
    objective: 'Visibilizar que todas las profesiones son aptas para todas las personas.',
    description: [
      'Investigación familiar: Preguntar en casa sobre el trabajo de papás, mamás, tíos... ¿Hay mujeres mecánicas? ¿Hombres enfermeros?',
      'Creación de la figura: Cada niño decora una silueta de cartón con la profesión que desee, sin importar el género.',
      'Montaje del Museo: Colocamos las figuras en el pasillo con la frase "Yo puedo ser...".',
      'Inauguración: Invitamos a las familias a visitar nuestra galería de la igualdad.'
    ],
    timing: '3 sesiones (Elaboración y exposición)',
    space: 'Pasillos del centro',
    grouping: 'Individual y comunidad escolar',
    evaluation: 'Capacidad de proyectar el futuro profesional sin barreras de género.',
    color: 'violet',
    icon: <IconMuseum />,
    materials: ['Siluetas de cartón grandes', 'Pinturas', 'Retazos de tela', 'Carteles'],
    adaptations: 'Permitir el uso de tecnología (tablets) para grabar mensajes de audio explicando cada profesión.'
  }
];
