export const paginatedResponse = ({ data, total, page, limit }) => ({
  data,
  total,
  page,
  totalPages: Math.ceil(total / limit) || 1,
});
