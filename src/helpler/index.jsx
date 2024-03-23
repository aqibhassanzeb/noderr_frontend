export const formatDate = (timestamp) => {
  const localZone = Intl.DateTimeFormat().resolvedOptions();
  const empDate = new Date(timestamp);
  return new Intl.DateTimeFormat("en-US", {
    timeZone: localZone.timeZone,
    hourCycle: "h12",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(empDate);
};
