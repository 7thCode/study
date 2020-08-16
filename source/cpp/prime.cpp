#include <iostream>
#include <cmath>

bool is_prime(int x) {
	float sqrt = std::sqrt(x);
	int max = std::floor(sqrt);
	bool result = true;

	for (int y = 2; y < max; y+=2) {
		if (x % y == 0) {
			result = false;
			break;
		}
	}
	return result;
}

int main() {

	for (int x = 3; x < 1000; x++) {
		if (is_prime(x)) {
			std::cout << (int) x << "\n";
		}
	}

}
