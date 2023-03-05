export interface CellProps {
  position: number;
  value: number;
  x: number;
  y: number;
  z: number;
}

export interface CellState {
  position: number;
  value: number;
  x: number;
  y: number;
  z: number;
}

export interface StatusState {
  status: string;
}

export interface StatusProps {
  status: string;
}

export type CellObj = { x: number; y: number; z: number; value: number; };

export type Response = Array<{ x: number; y: number; z: number; value: number; }>;
