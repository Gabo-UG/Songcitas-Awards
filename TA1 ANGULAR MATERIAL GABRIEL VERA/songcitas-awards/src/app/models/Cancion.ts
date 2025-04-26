export interface Cancion {
    id: number;
    titulo: string;
    artista: string;
    duracion: number; // en segundos
    genero: string;
    portada: string;
    votos: number;
    yaVotado: boolean; // tipo boolean agregado
  }
  