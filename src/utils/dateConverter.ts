const defaultLocale = 'pt-BR';

export const formatDateWithFullMonth = (date: Date) => {
  const _date = new Date(date);

  return new Intl.DateTimeFormat(defaultLocale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(_date);
};
