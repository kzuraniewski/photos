import { useCallback, useState } from 'react';

export type CounterOptions = {
	min?: number;
	max?: number;
};

const useCounter = (
	initialValue: number | null,
	options: CounterOptions = {}
) => {
	const { min, max } = options;

	const [value, setValue] = useState(initialValue);

	const wrapValue = (value: number) =>
		Math.max(Math.min(value, max ?? value), min ?? value);

	const set = useCallback((newValue: number | null) => {
		setValue(newValue !== null ? wrapValue(newValue) : null);
	}, []);

	const increase = useCallback(() => {
		setValue((value) => (value !== null ? wrapValue(value + 1) : null));
	}, []);

	const decrease = useCallback(() => {
		setValue((value) => (value !== null ? wrapValue(value - 1) : null));
	}, []);

	return {
		value,
		increase,
		decrease,
		set,
	};
};

export default useCounter;
