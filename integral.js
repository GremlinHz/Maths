const pi = (R, N) => {
  const Y = X => Math.sqrt((R**2) - (X**2))
  let area = R

  for(let i = 0; i < N; i++) {
    area += Number(2*Y(i*R/N))
  }

  area *= Number(R/(2*N))
  return area*4
}

console.log(pi(1, 1))