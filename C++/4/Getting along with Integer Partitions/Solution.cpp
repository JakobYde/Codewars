#include <vector>
#include <algorithm>
#include <string>
#include <math.h>

class IntPart
{
public:
	static std::string part(long long n) {
		std::vector<long long> products;
		std::vector<long long> partition;
		int startIndex = 0;
		long long firstInt = 1;

		//Call recursive function that creates all partitions
		createPartitions(n, firstInt, products, partition, startIndex);

		//Sort and erase duplicates from product vector
		std::sort(products.begin(), products.end());
		products.erase(std::unique(products.begin(), products.end()), products.end());

		//Find range
		long long range = products[products.size() - 1] - products[0];

		//Find and round average
		long double average = 0;
		for (int i = 0; i < products.size(); ++i)
			average += (long double)products[i] / products.size();
		std::string averageStr = std::to_string(round(average * 100) / 100);

		//Find and round median
		long double median;
		if (products.size() % 2) median = products[products.size() / 2];
		else median = (long double)(products[products.size() / 2] + products[products.size() / 2 - 1]) / 2;
		std::string medianStr = std::to_string(round(median * 100) / 100);

		//Print final string, substring is used to only get two decimals 
		return "Range: " + std::to_string(range) + " Average: " + averageStr.substr(0, averageStr.find('.') + 3) +
			" Median: " + medianStr.substr(0, medianStr.find('.') + 3);
	}

private:

	static void createPartitions(long long n, long long prevInt, std::vector<long long>& products, std::vector<long long>& partition, int index) {

		for (int i = prevInt; i <= n; i++)
		{
			long long rest = n - i;

			partition.push_back(i);
			createPartitions(rest, i, products, partition, index + 1);

			if (rest == 0) {
				long long product = 1;
				for (int i = 0; i < partition.size(); ++i)
					product *= partition[i];
				products.push_back(product);
			}
			partition.erase(partition.begin() + index);
		}
	}
};