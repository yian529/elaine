var demoData = [
    {
      'id': '1',
      'menuName': '基础管理',
      'menuCode': '10',
      'children': [
        {
          'menuName': '用户管理',
          'menuCode': '11'
        },
        {
          'menuName': '角色管理',
          'menuCode': '12',
          'children': [
            {
              'menuName': '管理员',
              'menuCode': '121'
            },
            {
              'menuName': 'CEO',
              'menuCode': '122'
            }
          ]
        },
        {
          'menuName': '权限管理',
          'menuCode': '13'
        }
      ]
    },
    {
      'id': '2',
      'menuName': '商品管理',
      'menuCode': ''
    }
  ];
  
  export default  demoData;