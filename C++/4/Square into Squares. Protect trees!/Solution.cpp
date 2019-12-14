#include <vector>
#include <math.h>

class Decomp
{
public:

	static std::vector<long long> decompose(long long n) {
		long long nSquared = n * n;
		std::vector<long long> decomposition;
		int startIndex = 0;
		//If a decomposition exists, return it in reverse, else return {}.
		if (findDecomp(nSquared, n - 1, decomposition, startIndex)) {
			std::reverse(decomposition.begin(), decomposition.end());
			return decomposition;
		}
		else return {};
	}

	//Recursive function to find the decomposition.
	//Returns true if a decomposition exists, false if not.
	static bool findDecomp(long long nSquared, long long n, std::vector<long long>& decomp, int index) {
		for (long long i = n; i > 0; --i)
		{
			long long nSquaredTemp = i * i;
			long long rest = nSquared - nSquaredTemp;
			if (rest >= 0) {
				decomp.push_back(i);
				if (rest == 0) return true;

				//Call itself using the squareroot of the rest to start from the
				//highest possible number, given that the square of the last number
				//was less than nSquared.
				if (findDecomp(rest, floor(sqrt(rest)) < i - 1 ? floor(sqrt(rest)) : i - 1,
					decomp, index + 1)) return true;
				//Reset
				else decomp.erase(decomp.begin() + index);
			}
		}
		return false;
	}
};