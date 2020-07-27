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
      },
      randomPick(){
        this.sauce = this.sauce_option[Math.floor(Math.random() * this.sauce_option.length)];
        this.tertiary = this.tertiary_option[Math.floor(Math.random() * this.tertiary_option.length)];
        this.base = this.base_option[Math.floor(Math.random() * this.base_option.length)];
        this.drinks_temp = this.drinks_temp_option[Math.floor(Math.random() * this.drinks_temp_option.length)];
        this.drinks = this.drinks_option[Math.floor(Math.random() * this.drinks_option.length)];
        if (Math.random() > 0.5){
          this.secondary = '';
          this.primary = this.primary_option[Math.floor(Math.random() * this.primary_option.length)];
        } else {
          this.primary = '';
          this.secondary = this.secondary_option[Math.floor(Math.random() * this.secondary_option.length)];
        }
      }
    },
    updated(){

    }
  }
)

new ClipboardJS('.js-clip');
