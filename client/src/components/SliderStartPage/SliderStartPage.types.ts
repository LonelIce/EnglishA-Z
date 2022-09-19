export interface ISliderData {
  slide: number;
  fadeState: 'fadeIn' | 'fadeOut';
  currentTimer: NodeJS.Timeout | null;
}
