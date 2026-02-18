
import React from 'react';
import { Activity } from './types';
import { IconDetective, IconBook, IconColors, IconMuseum } from './components/Icons';

export const ACTIVITIES: Activity[] = [
  {
    id: 'act1',
    title: 'Detectives de Estereotipos',
    type: 'Inicio',
    objective: 'Identificar sesgos de género en el lenguaje y el entorno inmediato.',
    description: [
      'Llegada de una carta misteriosa del "Club de la Igualdad".',
      'Asamblea de investigación: Analizamos frases como "los niños no lloran" o "las niñas son tranquilas".',
      'El juego del Semáforo: Clasificamos conductas en Verde (Igualitarias), Amarillo (Dudosas) y Rojo (Excluyentes).',
      'Compromiso de grupo: Creamos nuestro propio decálogo de aula.'
    ],
    timing: '2 sesiones (45 min)',
    space: 'Aula (Zona de asamblea)',
    grouping: 'Gran grupo',
    evaluation: 'Identifica al menos 2 estereotipos comunes en el lenguaje cotidiano.',
    color: 'sky',
    icon: <IconDetective />,
    materials: ['Lupa de cartón', 'Tarjetas de frases', 'Semáforo gigante', 'Pegatinas'],
    adaptations: 'Uso de pictogramas para alumnos con dificultades de comprensión lingüística.'
  },
  {
    id: 'act2',
    title: 'Bibliotecas Mágicas: Cuentos al Revés',
    type: 'Desarrollo',
    objective: 'Analizar críticamente los roles de género en la literatura infantil.',
    description: [
      'Lectura dramatizada de cuentos coeducativos (ej. "Rosa Caramelo", "Arturo y Clementina").',
      'Taller "Cambio de Rol": Inventamos finales donde los personajes no actúan por su género sino por su deseo.',
      'Disfrazarse de "Valentía" o "Cuidado": Rompemos el binario de disfraces en el aula.',
      'Grabación de un podcast con las nuevas versiones de los cuentos.'
    ],
    timing: '3 sesiones (30 min)',
    space: 'Biblioteca del centro / Rincón de lectura',
    grouping: 'Equipos cooperativos',
    evaluation: 'Propone alternativas no sexistas a situaciones de cuentos clásicos.',
    color: 'rose',
    icon: <IconBook />,
    materials: ['Cuentos seleccionados', 'Baúl de disfraces neutros', 'Grabadora/Tablet'],
    adaptations: 'Audios de los cuentos para alumnos con discapacidad visual o baja visión.'
  },
  {
    id: 'act3',
    title: 'Rincones de la Corresponsabilidad',
    type: 'Desarrollo',
    objective: 'Fomentar la participación equitativa en tareas de cuidado y mantenimiento.',
    description: [
      'Organización de rincones: Cocina, Taller, Clínica y Construcción.',
      'El "Carné de Corresponsabilidad": Los alumnos rotan obligatoriamente por todas las tareas.',
      'Taller de cuidados: Bañamos muñecos, preparamos comidas imaginarias y arreglamos "juguetes rotos".',
      'Diario de fotos: Documentamos a todos haciendo de todo.'
    ],
    timing: 'Diario (Tiempo de rincones)',
    space: 'Aula organizada por rincones',
    grouping: 'Pequeños grupos mixtos',
    evaluation: 'Participa activamente en rincones tradicionalmente asociados al otro sexo.',
    color: 'emerald',
    icon: <IconColors />,
    materials: ['Kit de herramientas', 'Muñecos diversos', 'Utensilios de cocina', 'Cámara'],
    adaptations: 'Materiales con texturas y tamaños adaptados para motricidad fina diversa.'
  },
  {
    id: 'act4',
    title: 'Gran Museo de las Profesiones Libres',
    type: 'Cierre',
    objective: 'Visibilizar la igualdad profesional y los proyectos de vida sin límites.',
    description: [
      'Visita de familias: Invitamos a mujeres en profesiones STEM y hombres en profesiones de cuidados.',
      'Autorretrato del Futuro: "De mayor quiero ser..." dibujado en siluetas de tamaño real.',
      'Montaje de la exposición: Los alumnos actúan como guías del museo para otros cursos.',
      'Fiesta de la Igualdad: Entrega de diplomas de "Persona Libre".'
    ],
    timing: 'Final de unidad (2 sesiones)',
    space: 'Pasillo principal y patio',
    grouping: 'Toda la comunidad educativa',
    evaluation: 'Expresa deseos profesionales sin basarse en el género.',
    color: 'violet',
    icon: <IconMuseum />,
    materials: ['Papel continuo', 'Pinturas vibrantes', 'Invitaciones', 'Diplomas'],
    adaptations: 'Panel de comunicación aumentativa para la explicación de la exposición.'
  }
];

export const SABERES_BASICOS = [
  "Identificación de estereotipos en el entorno cercano.",
  "Valoración positiva de la diversidad de género.",
  "Corresponsabilidad en las tareas domésticas y escolares.",
  "Expresión de sentimientos ante situaciones de desigualdad."
];
