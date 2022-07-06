import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypesSelector;
