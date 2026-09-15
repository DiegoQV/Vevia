export type BagId = 'bordeaux' | 'noir' | 'white' | 'structured';

export interface BagProduct {
  id: BagId;
  name: string;
  subtitle: string;
  price: number;
  currency: string;
  description: string;
  details: {
    material: string;
    hardware: string;
    dimensions: string;
    craftTime: string;
    technique: string;
  };
  image: string;
  videoSrc?: string;
  inStock: boolean;
}

export interface CartItem {
  product: BagProduct;
  quantity: number;
  strapOption?: string;
  selectedColor?: string;
}

export type SceneState = 'base' | 'noir' | 'white' | 'structured';
export type PlaybackStatus = 'loading' | 'ready' | 'starting' | 'playing' | 'error';
export type PlaybackDirection = 'forward' | 'reverse';
