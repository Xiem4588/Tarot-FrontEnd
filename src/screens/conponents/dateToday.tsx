// sử lý để lấy ngày tháng năm của Agenda
const formattedDateToday = () => {
  const today = new Date();
  const selectedDay = String(today.getDate()).padStart(2, '0'); // Ngay gồm 2 số
  const selectedMonth = today.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0
  const selectedYear = today.getFullYear(); // Nam
  const DateToday = `${selectedDay}-${selectedMonth}-${selectedYear}`;
  return DateToday;
};

export default formattedDateToday;
