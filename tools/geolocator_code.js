
const countries = ["Afghanistan", "Albania", "ALgeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Hezegovina", "Botswana", "Brazil", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos Island", "Colombia", "Comoros", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "DRC", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "North Korea", "Norther Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Picairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of the Congo", "Reunion", "Romania", "Russia", "Rwanda", "Saint Berthelemy", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", 
        "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "U.S. Virgin Islands", "Uganda", "Ukraine", "UAE", "UK", "USA", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Wallis and Futana", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];
const codes = [93, 355, 213, 1-684, 376, 244, 1-264, 672, 1-268, 54, 374, 297, 61, 43, 994, 1-242, 973, 880, 1-246, 375, 32, 501, 229, 1-441, 975, 591, 387, 267, 55, 246, 1-284, 673, 359, 226, 257, 855, 237, 1, 238, 1-345, 237, 235, 56, 86, 61, 61, 57, 269, 682, 506, 385, 53, 599, 357, 420, 243, 45, 253, 1-767, 1-809, 670, 593, 20, 503, 240, 291, 372, 251, 500, 298, 679, 358, 33, 689, 241, 220, 995, 49, 233, 350, 30, 299, 1-473, 1-671, 502, 44-1481, 224, 245, 592, 509, 504, 852, 36, 354, 91, 62, 98, 964, 353, 44-1624, 972, 39, 225, 1-876, 81, 44-1534, 962, 7, 254, 686, 383, 965, 996, 856, 371, 961, 266, 231, 218, 423, 370, 352, 853, 389, 261, 265, 60, 960, 223, 356, 692, 222, 230, 262, 52, 691, 373, 377, 976, 382, 1-664, 212, 258, 95, 264, 674, 977, 31, 599, 687, 64, 505, 227, 234, 683, 850, 1-670, 47, 968, 92, 680, 970, 507, 675, 595, 51, 63, 64, 48, 351, 1-787, 974, 242, 262, 40, 7, 250, 590, 290, 1-869, 1-758, 590, 508, 1-784, 685, 378, 239, 966, 221, 381, 248, 232, 65, 1-721, 421, 386, 677, 252, 27, 82, 211, 34, 94, 249, 597, 47, 268, 46, 41, 963, 886, 992, 255, 66, 228, 690, 676, 1-868, 216, 90, 993, 1-649, 688, 1-340, 256, 380, 971, 44, 1, 598, 998, 678, 379, 58, 84, 212, 967, 260, 263];

function findCountry()
{
    let code = document.getElementById("code").value;
    let text = "";
    if(code.isLetter())
    {
        text = "Input is not a number";
        return;
    }
    for(var i = 0; i < codes.length; i++)
    {
        if(codes[i] == code)
        {
            text = countries[i];
        }
    }
    if(text != "")
    {
        document.getElementById("demo").innerHTML = text;
    }
    else
    {
        document.getElementById("demo").innerHTML = "Country not found";
    }
    
}