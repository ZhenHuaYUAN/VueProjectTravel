export default {
  changeCity (state, city) {
    state.city = city
    // 本地存储，防止刷新时变回原来设置的city值
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
