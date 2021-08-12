var format = {
  formatDate(value) {
    if(value == null) return "";
        var date = new Date(value);
        return date.toLocaleDateString("en-GB");
    },
  formatMoney(number){
    if(number == null) return "";
    return new Intl.NumberFormat('de-DE').format(number);
  }
}
export default format