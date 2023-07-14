export function semver(array: string[]): string[] {
  const semverSorted = array
    .map((el) => el.split(".").map((n) => +n + 100))
    .sort()
    .map((el) => el.map((n) => n - 100).join("."));
  return semverSorted;
}
