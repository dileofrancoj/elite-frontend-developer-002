/*
 
Un enum es una clase especial. Representar / agrupar un conjunto de constantes en una entidad
Tipos de dato
    String
    Numbers
*/

(() => {
  enum PROFILES {
    'JR' = 'Junior',
    'MID' = 'Mid',
    'SR' = 'Senior'
  }

  enum AUDIO_LEVEL {
    MIN, // 0
    MEDIUM, // 1
    MAX // 2
  }

  type Profiles = 'junior' | 'mid' | 'senior'

  const volume: number = AUDIO_LEVEL.MIN
  const marc: PROFILES = PROFILES.SR

  const pepito: Profiles = 'junior'

  
})()