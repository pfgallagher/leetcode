export {};

type FreqMap = { [char: string]: number };

// const balloonFrequency = (str: string): FreqMap => {
// 	const balloonChars = [..."balon"];
// 	const freqMap: FreqMap = {};
// 	for (const char of [...str]) {
// 		if (balloonChars.includes(char)) {
// 			if (freqMap[char]) {
// 				freqMap[char]++;
// 			} else {
// 				freqMap[char] = 1;
// 			}
// 		}
// 	}
// 	for (const char of ["o", "l"]) {
// 		if (freqMap[char]) {
// 			freqMap[char] = Math.floor(freqMap[char] / 2);
// 		}
// 	}
// 	return freqMap;
// };

// const maxNumberOfBalloons = (text: string): number => {
// 	const balloonFreqVals = Object.values(balloonFrequency(text));
// 	return balloonFreqVals.length === 5 ? Math.min(...balloonFreqVals) : 0;
// };

const maxNumberOfBalloons = (text: string): number => {
	const freqMap: FreqMap = { b: 0, a: 0, l: 0, o: 0, n: 0 };
	for (const char of [...text]) {
		if (freqMap.hasOwnProperty(char)) {
			freqMap[char]++;
		}
	}
	for (const char of ["o", "l"]) {
		freqMap[char] = Math.floor(freqMap[char] / 2);
	}
	return Math.min(...Object.values(freqMap));
};
