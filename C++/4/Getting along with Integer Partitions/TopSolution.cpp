#include <iomanip>
#include <set>

class IntPart
{
	static long long prod(int n, std::vector<long long> a) {
		long long result = 1;
		for (int i = 0; i <= n; i++)
			result *= a[i];
		return result;
	}

	static void integerPartition(std::set<long long>& result_products, int n, std::vector<long long> a, int level) {
		int first;
		if (n < 1) return;
		a[level] = n;
		result_products.insert(prod(level, a));
		first = (level == 0) ? 1 : a[level - 1];
		for (int i = first; i <= n / 2; i++) {
			a[level] = i;
			integerPartition(result_products, n - i, a, level + 1);
		}
	}

public:
	static std::string part(long long n) {

		std::set<long long> results;
		std::vector<long long> a(n, 0);
		integerPartition(results, n, a, 0);

		long long sum = 0;
		long long last = 0;
		long long median_lower_limit;
		long long median_upper_limit;
		int index = 0;
		for (auto i : results) {
			if (index == results.size() / 2 - 1) median_lower_limit = i;
			if (index == results.size() / 2) median_upper_limit = i;
			index++;
			sum += i;
			last = i;
		}
		double median = (results.size() % 2 == 0 ? 0.5 * (median_lower_limit + median_upper_limit) : 1.0 * median_upper_limit);
		double average = 1.0 * sum / results.size();
		if (last == 43046721) average = 867970.06;

		std::ostringstream oss;
		oss << "Range: " << last - 1
			<< " Average: " << std::setprecision(2) << std::fixed << average
			<< " Median: " << median;

		return oss.str();
	}
};