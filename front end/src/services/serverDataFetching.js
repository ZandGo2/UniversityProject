const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const getToursList = async () => {
  try {
    const response = await fetch(`${BASE_URL}tour`, {
      next: { revalidate: 60 * 60 * 24 * 7 },
    });
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error };
  }
};
const getTourDetails = async (tourId) => {
  try {
    const response = await fetch(`${BASE_URL}tour/${tourId}`, {
      next: { revalidate: 60 * 60 * 24 * 7 },
    });
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error };
  }
};

export { getToursList, getTourDetails };
