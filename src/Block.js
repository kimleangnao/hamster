import React from "react";

const Block = ({select, profile}) =>{
    return(
    <div className="hamster--house">
        <div className="house--block house--food">
            <svg className="house--food--svg">
                <ellipse className="house--food--mat" cx="200" cy="200" rx="150" ry="100" />
                <g className={`${select == 1 ? "display--show" : "display"}`}>
                    <ellipse className="house--food--hamster--left--ear" cx="150" cy="135" rx="15" ry="15" />
                    <ellipse className="house--food--hamster--right--ear" cx="240" cy="135" rx="15" ry="15" />
                    <path className="house--food--hamster--body" d="M190 125 Q 215 125 230 135 Q 245 145 250 160 Q 262 200 
                    265 240 Q 265 260 260 270 Q 259 274 250 275 L 140 275 Q 131 274 130 270 Q 125 260 125 240 Q 125 200 140 160 Q 145 145 160 135 Q 175 125 190 125" />
                    <circle className="house--food--hamster--left--eye" cx="170" cy="170" r="10" />
                    <circle className="house--food--hamster--right--eye" cx="220" cy="170" r="10" />
                    <circle className="house--food--hamster--left--eye--dot" cx="172" cy="172" r="2.5" />
                    <circle className="house--food--hamster--right--eye--dot" cx="218" cy="172" r="2.5" />
                    <path className="house--food--hamster--upper--nose" d="M190 175 Q 195 180 200 175 " />
                    <path className="house--food--hamster--lower--nose" d="M185 185 Q 190 192 195 185 Q 200 192 205 185" />
                    <path className="house--food--hamster--whisker" d="M 150 175 Q 140 170 128 175" />
                    <path className="house--food--hamster--whisker" d="M 150 180 Q 140 176 128 185" />
                    <path className="house--food--hamster--whisker" d="M 240 175 Q 250 170 262 175" />
                    <path className="house--food--hamster--whisker" d="M 240 180 Q 250 176 262 185" />
                    <path className="house--food--hamster--left--foot" d="M165 275 Q 145 250 160 240 Q 185 235 175 275 Q 170 277 165 275 " />
                    <path className="house--food--hamster--toe--nails" d="M 158 240 Q 158 250 165 260" />
                    <path className="house--food--hamster--toe--nails" d="M 165 240 Q 169 250 172 255" />
                    <path className="house--food--hamster--right--foot" d="M225 275 Q245 250 230 240 Q 205 235 215 275 Q 220 277 225 275" />
                    <path className="house--food--hamster--toe--nails" d="M223 240 Q 223 250 220 260" />
                    <path className="house--food--hamster--toe--nails" d="M230 240 Q 233 250 228 260" />
                    <ellipse className="house--food--hamster--cookie" cx="195" cy="220" rx="23" ry="22" />
                    <ellipse className="house--food--hamster--cookie--dot" cx="190" cy="215" rx="4" ry="3" />
                    <ellipse className="house--food--hamster--cookie--dot" cx="200" cy="205" rx="3" ry="2" />
                    <ellipse className="house--food--hamster--cookie--dot" cx="205" cy="230" rx="1.5" ry="1.5" />
                    <ellipse className="house--food--hamster--cookie--dot" cx="185" cy="235" rx="4" ry="3" />
                    <path className="house--food--hamster--finger" d="M160 210 Q 170 219 180 218 Q 185 222 178 230 Q 170 235 150 222" />
                    <path className="house--food--hamster--finger" d="M230 210 Q 220 219 210 218 Q 205 222 212 230 Q 220 235 240 222" />
                </g>
                <g>
                    <path className="house--food-hamster--glass--milk" d="M110 225 L 108 250 L72 250 L 70 225" />
                    <path className="house--food-hamster--glass" d="M110 210 L 108 250 L72 250 L 70 210" />
                    <ellipse className="house--food-hamster--glass" cx="90" cy="210" rx="20" ry="3" />
                </g>
            </svg>
            <div className={`${select == 1 ? "display--show house--food--dialogue" : "display house--food--dialogue"}`}>
                <img src={profile} alt="profile" className="house--play--dialogue--pic" />
                <p className="house--food--dialogue--p" >Thanks for the food. NOM NOM NOM</p>
            </div>
        </div>
        <div className="house--block house--reading">
            <svg className="house--reading--svg">
                <ellipse className="house--reading--mat" cx="200" cy="200" rx="150" ry="100" />
                <g className={`${select == 2 ? "display--show" : "display"}`}>
                    <ellipse className="house--reading--hamster--left--ear" cx="150" cy="135" rx="15" ry="15" />
                    <ellipse className="house--reading--hamster--right--ear" cx="240" cy="135" rx="15" ry="15" />
                    <path className="house--reading--hamster--body" d="M190 125 Q 215 125 230 135 Q 245 145 250 160 Q 262 200 
                    265 240 Q 265 260 260 270 Q 259 274 250 275 L 140 275 Q 131 274 130 270 Q 125 260 125 240 Q 125 200 140 160 Q 145 145 160 135 Q 175 125 190 125" />
                    <circle className="house--reading--hamster--left--eye" cx="170" cy="170" r="10" />
                    <circle className="house--reading--hamster--right--eye" cx="220" cy="170" r="10" />
                    <circle className="house--reading--hamster--left--eye--dot" cx="170" cy="174" r="2.5" />
                    <circle className="house--reading--hamster--right--eye--dot" cx="220" cy="174" r="2.5" />
                    <path className="house--reading--hamster--upper--nose" d="M190 175 Q 195 180 200 175 " />
                    <path className="house--reading--hamster--lower--nose" d="M185 185 Q 190 192 195 185 Q 200 192 205 185" />
                    {/*<ellipse className="house--exercise--hamster--lower--nose" cx="195" cy="188" rx="10" ry="2"  />*/}
                    <path className="house--reading--hamster--whisker" d="M 150 175 Q 140 170 128 175" />
                    <path className="house--reading--hamster--whisker" d="M 150 180 Q 140 176 128 185" />
                    <path className="house--reading--hamster--whisker" d="M 240 175 Q 250 170 262 175" />
                    <path className="house--reading--hamster--whisker" d="M 240 180 Q 250 176 262 185" />

                    <circle className="house--reading--hamster--left--glasses" cx="170" cy="175" r="10" />
                    <circle className="house--reading--hamster--right--glasses" cx="220" cy="175" r="10" />
                    <path className="house--reading--hamster--glasses--bridge" d="M180 173 L 210 173" />
                    <path className="house--reading--hamster--glasses--bridge" d="M160 173 L 140 165" />
                    <path className="house--reading--hamster--glasses--bridge" d="M230 173 L 250 165" />

                    <path className="house--reading--hamster--left--foot" d="M165 275 Q 145 250 160 240 Q 185 235 175 275 Q 170 277 165 275 " />
                    <path className="house--reading--hamster--toe--nails" d="M 158 240 Q 158 250 165 260" />
                    <path className="house--reading--hamster--toe--nails" d="M 165 240 Q 169 250 172 255" />
                    <path className="house--reading--hamster--right--foot" d="M225 275 Q245 250 230 240 Q 205 235 215 275 Q 220 277 225 275" />
                    <path className="house--reading--hamster--toe--nails" d="M223 240 Q 223 250 220 260" />
                    <path className="house--reading--hamster--toe--nails" d="M230 240 Q 233 250 228 260" />

                    <path className="house--reading--hamster--book" d="M165 200 L 195 210 L 225 200 L225 235 L 195 245 L 165 235 L 165 200 L195 210 L 195 245" />
                    <path className="house--reading--hamster--left--letter" d="M170 210 L 190 217 L 180 214 L 180 230 L 175 230 L 175 225" />
                    <path className="house--reading--hamster--right--letter" d="M220 210 L 200 215 L 200 225 L 220 220 L 220 230 L 200 235" />
                    <path className="house--reading--hamster--finger" d="M160 210 Q 170 219 180 218 Q 185 222 178 230 Q 170 235 150 222" />
                    <path className="house--reading--hamster--finger" d="M230 210 Q 220 219 210 218 Q 205 222 212 230 Q 220 235 240 222" />
                </g>
                <g>
                    <path className="house--reading--hamster--books--left" d="M75 210 L 110 210 L 115 245 L 80 245Z" />
                    <path className="house--reading--hamster--books--left-middle" d="M70 200 L 105 200 L 110 240 L 75 240Z " />
                    <path className="house--reading--hamster--books--left-top" d="M85 190 L 105 225 L 65 235 L 50 200 L 85 190 L 92 195 L 111 228 L 105 225 L 111 228 L 68 238 L 65 235" />
                    <path className="house--reading--hamster--books--left-top--letter" d="M85 200 L 81 195 L 55 203 L 58 208" />
                    <path className="house--reading--hamster--books--left-top--letter" d="M90 210 L86 204 L 75 208 L 79 214 L 65 218 L 62 212" />
                    <path className="house--reading--hamster--books--left-top--letter" d="M96 223 L 91 215 L 81 218 L 85 225 L 71 229 L 68 222 " />
                </g>
            </svg>
            <div className={`${select == 2 ? "display--show house--reading--dialogue" : "display house--reading--dialogue"}`}>
                <img src={profile} alt="profile" className="house--play--dialogue--pic" />
                <p className="house--reading--dialogue--p">Knowledge is power... OwO</p>
            </div>
        </div>
        <div className="house--block house--sleep">
            <svg className="house--sleep--svg">
                <ellipse className="house--sleep--mat" cx="200" cy="200" rx="150" ry="100" />
                <g className={`${select == 4 ? "display--show" : "display"}`}>
                    <ellipse className="house--sleep--hamster--left--ear" cx="150" cy="135" rx="15" ry="15" />
                    <ellipse className="house--sleep--hamster--right--ear" cx="240" cy="135" rx="15" ry="15" />
                    <path className="house--sleep--hamster--body" d="M190 125 Q 215 125 230 135 Q 245 145 250 160 Q 262 200 
                    265 240 Q 265 260 260 270 Q 259 274 250 275 L 140 275 Q 131 274 130 270 Q 125 260 125 240 Q 125 200 140 160 Q 145 145 160 135 Q 175 125 190 125" />
                    <path className="house--sleep--hamster--left--eye" d="M165 170 Q 175 175 185 170 " />
                    <path className="house--sleep--hamster--right--eye" d="M205 170 Q 215 175 225 170 "  />
                    
                    <path className="house--sleep--hamster--upper--nose" d="M190 175 Q 195 180 200 175 " />
                    <path className="house--sleep--hamster--lower--nose" d="M185 185 Q 190 192 195 185 Q 200 192 205 185" />
                    <path className="house--sleep--hamster--whisker" d="M 150 175 Q 140 170 128 175" />
                    <path className="house--sleep--hamster--whisker" d="M 150 180 Q 140 176 128 185" />
                    <path className="house--sleep--hamster--whisker" d="M 240 175 Q 250 170 262 175" />
                    <path className="house--sleep--hamster--whisker" d="M 240 180 Q 250 176 262 185" />
                    <path className="house--sleep--hamster--left--foot" d="M165 275 Q 145 250 160 240 Q 185 235 175 275 Q 170 277 165 275 " />
                    <path className="house--sleep--hamster--toe--nails" d="M 158 240 Q 158 250 165 260" />
                    <path className="house--sleep--hamster--toe--nails" d="M 165 240 Q 169 250 172 255" />
                    <path className="house--sleep--hamster--right--foot" d="M225 275 Q245 250 230 240 Q 205 235 215 275 Q 220 277 225 275" />
                    <path className="house--sleep--hamster--toe--nails" d="M223 240 Q 223 250 220 260" />
                    <path className="house--sleep--hamster--toe--nails" d="M230 240 Q 233 250 228 260" />

                    <path className="house--sleep--hamster--finger" d="M160 210 Q 170 219 180 218 Q 185 222 178 230 Q 170 235 150 222" />
                    <path className="house--sleep--hamster--finger" d="M230 210 Q 220 219 210 218 Q 205 222 212 230 Q 220 235 240 222" />
                    <path className="house--sleep--hamster--blanket" d="M105 200 Q 130 195 170 200 Q 200 205 250 200  Q 260 198 290 200 Q 285 225 290 250 Q 295 265 290 280 Q 255 295 200 290 Q 130 285 110 280 L 105 200  " />
                
                </g>
            </svg>
            <div className={`${select == 4 ? "display--show house--sleep--dialogue" : "display house--sleep--dialogue"}`}>
                <img src={profile} alt="profile"  className="house--play--dialogue--pic" />
                <p className="house--sleep--dialogue--p" >Nap time, see you in a bit uwu</p>
            </div>
        </div>
        <div className="house--block house--play">
            <svg className="house--play--svg">
                <ellipse className="house--play--mat" cx="200" cy="200" rx="150" ry="100" />
                <g className={`${select == 3 ? "display--show" : "display"}`}>
                    <ellipse className="house--play--hamster--left--ear" cx="150" cy="135" rx="15" ry="15" />
                    <ellipse className="house--play--hamster--right--ear" cx="240" cy="135" rx="15" ry="15" />
                    <path className="house--play--hamster--body" d="M190 125 Q 215 125 230 135 Q 245 145 250 160 Q 262 200 
                    265 240 Q 265 260 260 270 Q 259 274 250 275 L 140 275 Q 131 274 130 270 Q 125 260 125 240 Q 125 200 140 160 Q 145 145 160 135 Q 175 125 190 125" />
                    <circle className="house--play--hamster--left--eye" cx="170" cy="170" r="10" />
                    <circle className="house--play--hamster--right--eye" cx="220" cy="170" r="10" />
                    <circle className="house--play--hamster--left--eye--dot" cx="172" cy="174" r="2.5" />
                    <circle className="house--play--hamster--right--eye--dot" cx="218" cy="174" r="2.5" />
                    <path className="house--play--hamster--upper--nose" d="M190 175 Q 195 180 200 175 " />
                    <path className="house--play--hamster--lower--nose" d="M185 185 Q 190 192 195 185 Q 200 192 205 185" />
                    {/*<ellipse className="house--exercise--hamster--lower--nose" cx="195" cy="188" rx="10" ry="2"  />*/}
                    <path className="house--play--hamster--whisker" d="M 150 175 Q 140 170 128 175" />
                    <path className="house--play--hamster--whisker" d="M 150 180 Q 140 176 128 185" />
                    <path className="house--play--hamster--whisker" d="M 240 175 Q 250 170 262 175" />
                    <path className="house--play--hamster--whisker" d="M 240 180 Q 250 176 262 185" />
                    <path className="house--play--hamster--left--foot" d="M165 275 Q 145 250 160 240 Q 185 235 175 275 Q 170 277 165 275 " />
                    <path className="house--play--hamster--toe--nails" d="M 158 240 Q 158 250 165 260" />
                    <path className="house--play--hamster--toe--nails" d="M 165 240 Q 169 250 172 255" />
                    <path className="house--play--hamster--right--foot" d="M225 275 Q245 250 230 240 Q 205 235 215 275 Q 220 277 225 275" />
                    <path className="house--play--hamster--toe--nails" d="M223 240 Q 223 250 220 260" />
                    <path className="house--play--hamster--toe--nails" d="M230 240 Q 233 250 228 260" />
                    
                    <path className="house--play--hamster--game" d="M170 182 L 220 182 L 220 240 L 170 240Z" />
                    <circle className="house--play--hamster--game--logo" cx="195" cy="200" r="8" />
                    <path className="house--play--hamster--game--logo" d="M 190 204 L 195 192 L 200 204Z" />
                    <path className="house--play--hamster--finger" d="M160 210 Q 170 219 180 218 Q 185 222 178 230 Q 170 235 150 222" />
                    <path className="house--play--hamster--finger" d="M230 210 Q 220 219 210 218 Q 205 222 212 230 Q 220 235 240 222" />
                    
                </g>
            </svg>
            <div className={`${select == 3 ? "display--show house--play--dialogue" : "display house--play--dialogue"}`}>
                <img src={profile} alt="profile"  className="house--play--dialogue--pic" />
                <p className="house--play--dialogue--p">Phew Phew Phew .... phew phew </p>
            </div>
        </div>
    </div>
    )
}

export default Block;