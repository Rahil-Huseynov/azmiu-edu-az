const copyright_date = document.getElementById('copyright_date')

const CopyrightDate= new Date

copyright_date.innerHTML = `Copyright © 2019 -  ${CopyrightDate.getFullYear()}`