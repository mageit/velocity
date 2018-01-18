/*
 * VelocityJS.org (C) 2014-2017 Julian Shapiro.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details
 * 
 * Step easing generator.
 */

namespace Easing {
	const cache: {[steps: number]: VelocityEasingFn} = {};

	export function generateStep(steps): VelocityEasingFn {
		const fn = cache[steps];

		if (fn) {
			return fn;
		}
		return cache[steps] = function(percentComplete, startValue, endValue) {
			if (percentComplete === 0) {
				return startValue;
			}
			if (percentComplete === 1) {
				return endValue;
			}
			return startValue + Math.round(percentComplete * steps) * (1 / steps) * (endValue - startValue);
		};
	}
};