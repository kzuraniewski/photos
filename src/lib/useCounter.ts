import { useCallback, useState } from 'react';

export type CounterOptions = {
	min?: number | null;
	max?: number | null;
};

const useCounter = (
	initialValue: number,
	options: CounterOptions = {
		min: null,
		max: null,
	}
) => {
	const { min, max } = options;

	const [value, setValue] = useState(initialValue);

	const wrapValue = (value: number) =>
		Math.max(Math.min(value, max ?? value), min ?? value);

	const set = useCallback((newValue: number) => {
		setValue(wrapValue(newValue));
	}, []);

	const increase = useCallback(() => {
		setValue((value) => wrapValue(value + 1));
	}, []);

	const decrease = useCallback(() => {
		setValue((value) => wrapValue(value - 1));
	}, []);

	const atMin = value === min;
	const atMax = value === max;

	return {
		value,
		atMin,
		atMax,
		increase,
		decrease,
		set,
	};
};

export default useCounter;
