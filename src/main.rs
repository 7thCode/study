



fn is_prime(x: i32) -> bool {
    let sqrt: f32 = (x as f32).sqrt();
    let max: i32 = sqrt.floor() as i32;
    let mut result: bool = true;
    let mut y = 2;
    while y < max {
        if x % y == 0 {
            result = false;
            break;
        }
        y = y + 2;
    }
    return result;
}

fn main() {
    for x in 3..1000 {
        if is_prime(x) {
            let str: String = x.to_string();
            println!("{}", str);
        }
    }
}
