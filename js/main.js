var food = new Vue(
  {
    el: '#app',
    vuetify: new Vuetify(),
    data: {
      snackbar: false,
      sauce_option: ['洋蔥', '黑椒' , '蒜茸' , '茄汁' , '咖喱' , '豉油' , '燒' , '白' , '粟米' , '走'],
      primary_option: ['牛扒', '雞扒', '豬扒', '雞中翼', '司華力腸', '炸雞脾' ],
      secondary_option: ['漢堡扒', '叉燒'],
      tertiary_option: ['煎蛋', '腸仔' , '餐肉'],
      base_option: ['飯', '意粉'],
      drinks_temp_option: ['凍', '熱'],
      drinks_option: ['奶茶', '檸茶', '華田', '好立克', '菜蜜'],
      sauce: '',
      primary: '',
      secondary: '',
      tertiary: '',
      base: '',
      drinks_temp: '',
      drinks: ''
    },
    methods:{
      reset(){
        this.sauce = '',
        this.primary = '',
        this.secondary = '',
        this.tertiary = '',
        this.base = '',
        this.drinks_temp = '',
        this.drinks = ''
      }
    },
    updated(){

    }
  }
)

new ClipboardJS('.js-clip');
