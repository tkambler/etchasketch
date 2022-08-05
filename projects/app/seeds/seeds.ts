import * as bcrypt from 'bcrypt';
import * as fs from 'fs-extra';
import * as path from 'path';

export const seed = async (knex) => {
  await knex('users').insert([
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@gmail.com',
      username: 'john.doe',
      password_hash: await bcrypt.hash('123', 10),
    },
  ]);

  await knex('whiteboards').insert([
    {
      name: 'Friday, August 5th 2022, 11:44:05 am',
      data: `[{"type":"setLineWidth","width":1},{"type":"setStrokeColor","color":"black"},{"type":"setStrokeColor","color":"black"},{"type":"setLineWidth","width":1},{"type":"beginPath"},{"type":"moveTo","x":175.5,"y":112},{"type":"lineTo","x":175.5,"y":113},{"type":"stroke","x":175.5,"y":113},{"type":"lineTo","x":175.5,"y":113},{"type":"stroke","x":175.5,"y":113},{"type":"lineTo","x":176.5,"y":113},{"type":"stroke","x":176.5,"y":113},{"type":"lineTo","x":176.5,"y":114},{"type":"stroke","x":176.5,"y":114},{"type":"lineTo","x":176.5,"y":120},{"type":"stroke","x":176.5,"y":120},{"type":"lineTo","x":177.5,"y":127},{"type":"stroke","x":177.5,"y":127},{"type":"lineTo","x":177.5,"y":133},{"type":"stroke","x":177.5,"y":133},{"type":"lineTo","x":178.5,"y":143},{"type":"stroke","x":178.5,"y":143},{"type":"lineTo","x":178.5,"y":157},{"type":"stroke","x":178.5,"y":157},{"type":"lineTo","x":178.5,"y":171},{"type":"stroke","x":178.5,"y":171},{"type":"lineTo","x":178.5,"y":192},{"type":"stroke","x":178.5,"y":192},{"type":"lineTo","x":180.5,"y":206},{"type":"stroke","x":180.5,"y":206},{"type":"lineTo","x":181.5,"y":210},{"type":"stroke","x":181.5,"y":210},{"type":"lineTo","x":184.5,"y":224},{"type":"stroke","x":184.5,"y":224},{"type":"lineTo","x":187.5,"y":236},{"type":"stroke","x":187.5,"y":236},{"type":"lineTo","x":193.5,"y":253},{"type":"stroke","x":193.5,"y":253},{"type":"lineTo","x":196.5,"y":265},{"type":"stroke","x":196.5,"y":265},{"type":"lineTo","x":198.5,"y":269},{"type":"stroke","x":198.5,"y":269},{"type":"lineTo","x":200.5,"y":273},{"type":"stroke","x":200.5,"y":273},{"type":"lineTo","x":200.5,"y":273},{"type":"stroke","x":200.5,"y":273},{"type":"lineTo","x":200.5,"y":274},{"type":"stroke","x":200.5,"y":274},{"type":"lineTo","x":200.5,"y":274},{"type":"stroke","x":200.5,"y":274},{"type":"lineTo","x":200.5,"y":274},{"type":"stroke","x":200.5,"y":274},{"type":"lineTo","x":200.5,"y":274},{"type":"stroke","x":200.5,"y":274},{"type":"beginPath"},{"type":"moveTo","x":234.5,"y":111},{"type":"lineTo","x":234.5,"y":112},{"type":"stroke","x":234.5,"y":112},{"type":"lineTo","x":234.5,"y":113},{"type":"stroke","x":234.5,"y":113},{"type":"lineTo","x":237.5,"y":127},{"type":"stroke","x":237.5,"y":127},{"type":"lineTo","x":240.5,"y":141},{"type":"stroke","x":240.5,"y":141},{"type":"lineTo","x":243.5,"y":150},{"type":"stroke","x":243.5,"y":150},{"type":"lineTo","x":248.5,"y":162},{"type":"stroke","x":248.5,"y":162},{"type":"lineTo","x":252.5,"y":176},{"type":"stroke","x":252.5,"y":176},{"type":"lineTo","x":254.5,"y":188},{"type":"stroke","x":254.5,"y":188},{"type":"lineTo","x":255.5,"y":192},{"type":"stroke","x":255.5,"y":192},{"type":"lineTo","x":258.5,"y":205},{"type":"stroke","x":258.5,"y":205},{"type":"lineTo","x":258.5,"y":223},{"type":"stroke","x":258.5,"y":223},{"type":"lineTo","x":258.5,"y":245},{"type":"stroke","x":258.5,"y":245},{"type":"lineTo","x":256.5,"y":271},{"type":"stroke","x":256.5,"y":271},{"type":"lineTo","x":255.5,"y":285},{"type":"stroke","x":255.5,"y":285},{"type":"lineTo","x":255.5,"y":299},{"type":"stroke","x":255.5,"y":299},{"type":"lineTo","x":255.5,"y":299},{"type":"stroke","x":255.5,"y":299},{"type":"beginPath"},{"type":"moveTo","x":257.5,"y":191},{"type":"lineTo","x":257.5,"y":192},{"type":"stroke","x":257.5,"y":192},{"type":"lineTo","x":256.5,"y":192},{"type":"stroke","x":256.5,"y":192},{"type":"lineTo","x":254.5,"y":193},{"type":"stroke","x":254.5,"y":193},{"type":"lineTo","x":248.5,"y":196},{"type":"stroke","x":248.5,"y":196},{"type":"lineTo","x":247.5,"y":196},{"type":"stroke","x":247.5,"y":196},{"type":"lineTo","x":237.5,"y":198},{"type":"stroke","x":237.5,"y":198},{"type":"lineTo","x":225.5,"y":199},{"type":"stroke","x":225.5,"y":199},{"type":"lineTo","x":211.5,"y":199},{"type":"stroke","x":211.5,"y":199},{"type":"lineTo","x":205.5,"y":199},{"type":"stroke","x":205.5,"y":199},{"type":"lineTo","x":196.5,"y":199},{"type":"stroke","x":196.5,"y":199},{"type":"lineTo","x":184.5,"y":199},{"type":"stroke","x":184.5,"y":199},{"type":"lineTo","x":182.5,"y":200},{"type":"stroke","x":182.5,"y":200},{"type":"lineTo","x":181.5,"y":200},{"type":"stroke","x":181.5,"y":200},{"type":"lineTo","x":181.5,"y":200},{"type":"stroke","x":181.5,"y":200},{"type":"lineTo","x":180.5,"y":200},{"type":"stroke","x":180.5,"y":200},{"type":"lineTo","x":180.5,"y":200},{"type":"stroke","x":180.5,"y":200},{"type":"lineTo","x":178.5,"y":200},{"type":"stroke","x":178.5,"y":200},{"type":"lineTo","x":174.5,"y":201},{"type":"stroke","x":174.5,"y":201},{"type":"lineTo","x":173.5,"y":201},{"type":"stroke","x":173.5,"y":201},{"type":"lineTo","x":171.5,"y":201},{"type":"stroke","x":171.5,"y":201},{"type":"lineTo","x":169.5,"y":202},{"type":"stroke","x":169.5,"y":202},{"type":"lineTo","x":169.5,"y":201},{"type":"stroke","x":169.5,"y":201},{"type":"lineTo","x":169.5,"y":201},{"type":"stroke","x":169.5,"y":201},{"type":"lineTo","x":169.5,"y":200},{"type":"stroke","x":169.5,"y":200},{"type":"lineTo","x":169.5,"y":200},{"type":"stroke","x":169.5,"y":200},{"type":"beginPath"},{"type":"moveTo","x":321.5,"y":198},{"type":"lineTo","x":321.5,"y":198},{"type":"stroke","x":321.5,"y":198},{"type":"lineTo","x":321.5,"y":198},{"type":"stroke","x":321.5,"y":198},{"type":"lineTo","x":321.5,"y":204},{"type":"stroke","x":321.5,"y":204},{"type":"lineTo","x":321.5,"y":212},{"type":"stroke","x":321.5,"y":212},{"type":"lineTo","x":321.5,"y":220},{"type":"stroke","x":321.5,"y":220},{"type":"lineTo","x":321.5,"y":228},{"type":"stroke","x":321.5,"y":228},{"type":"lineTo","x":321.5,"y":229},{"type":"stroke","x":321.5,"y":229},{"type":"lineTo","x":321.5,"y":237},{"type":"stroke","x":321.5,"y":237},{"type":"lineTo","x":321.5,"y":241},{"type":"stroke","x":321.5,"y":241},{"type":"lineTo","x":321.5,"y":249},{"type":"stroke","x":321.5,"y":249},{"type":"lineTo","x":321.5,"y":255},{"type":"stroke","x":321.5,"y":255},{"type":"lineTo","x":322.5,"y":262},{"type":"stroke","x":322.5,"y":262},{"type":"lineTo","x":322.5,"y":266},{"type":"stroke","x":322.5,"y":266},{"type":"lineTo","x":323.5,"y":267},{"type":"stroke","x":323.5,"y":267},{"type":"beginPath"},{"type":"moveTo","x":319.5,"y":154},{"type":"lineTo","x":319.5,"y":154},{"type":"stroke","x":319.5,"y":154},{"type":"lineTo","x":319.5,"y":155},{"type":"stroke","x":319.5,"y":155},{"type":"lineTo","x":319.5,"y":155},{"type":"stroke","x":319.5,"y":155},{"type":"lineTo","x":319.5,"y":156},{"type":"stroke","x":319.5,"y":156},{"type":"lineTo","x":320.5,"y":156},{"type":"stroke","x":320.5,"y":156},{"type":"lineTo","x":320.5,"y":162},{"type":"stroke","x":320.5,"y":162},{"type":"lineTo","x":320.5,"y":168},{"type":"stroke","x":320.5,"y":168},{"type":"lineTo","x":320.5,"y":169},{"type":"stroke","x":320.5,"y":169},{"type":"lineTo","x":320.5,"y":169},{"type":"stroke","x":320.5,"y":169},{"type":"lineTo","x":320.5,"y":171},{"type":"stroke","x":320.5,"y":171},{"type":"beginPath"},{"type":"moveTo","x":430.5,"y":331},{"type":"lineTo","x":430.5,"y":335},{"type":"stroke","x":430.5,"y":335},{"type":"lineTo","x":430.5,"y":336},{"type":"stroke","x":430.5,"y":336},{"type":"lineTo","x":431.5,"y":342},{"type":"stroke","x":431.5,"y":342},{"type":"lineTo","x":434.5,"y":354},{"type":"stroke","x":434.5,"y":354},{"type":"lineTo","x":439.5,"y":367},{"type":"stroke","x":439.5,"y":367},{"type":"lineTo","x":440.5,"y":379},{"type":"stroke","x":440.5,"y":379},{"type":"lineTo","x":445.5,"y":399},{"type":"stroke","x":445.5,"y":399},{"type":"lineTo","x":450.5,"y":415},{"type":"stroke","x":450.5,"y":415},{"type":"lineTo","x":455.5,"y":431},{"type":"stroke","x":455.5,"y":431},{"type":"lineTo","x":460.5,"y":451},{"type":"stroke","x":460.5,"y":451},{"type":"lineTo","x":463.5,"y":460},{"type":"stroke","x":463.5,"y":460},{"type":"lineTo","x":469.5,"y":474},{"type":"stroke","x":469.5,"y":474},{"type":"lineTo","x":473.5,"y":486},{"type":"stroke","x":473.5,"y":486},{"type":"lineTo","x":476.5,"y":494},{"type":"stroke","x":476.5,"y":494},{"type":"lineTo","x":476.5,"y":495},{"type":"stroke","x":476.5,"y":495},{"type":"lineTo","x":476.5,"y":495},{"type":"stroke","x":476.5,"y":495},{"type":"lineTo","x":476.5,"y":496},{"type":"stroke","x":476.5,"y":496},{"type":"lineTo","x":476.5,"y":496},{"type":"stroke","x":476.5,"y":496},{"type":"lineTo","x":476.5,"y":495},{"type":"stroke","x":476.5,"y":495},{"type":"beginPath"},{"type":"moveTo","x":627.5,"y":398},{"type":"lineTo","x":626.5,"y":398},{"type":"stroke","x":626.5,"y":398},{"type":"lineTo","x":626.5,"y":399},{"type":"stroke","x":626.5,"y":399},{"type":"lineTo","x":621.5,"y":405},{"type":"stroke","x":621.5,"y":405},{"type":"lineTo","x":616.5,"y":410},{"type":"stroke","x":616.5,"y":410},{"type":"lineTo","x":614.5,"y":411},{"type":"stroke","x":614.5,"y":411},{"type":"lineTo","x":611.5,"y":417},{"type":"stroke","x":611.5,"y":417},{"type":"lineTo","x":605.5,"y":425},{"type":"stroke","x":605.5,"y":425},{"type":"lineTo","x":601.5,"y":435},{"type":"stroke","x":601.5,"y":435},{"type":"lineTo","x":598.5,"y":443},{"type":"stroke","x":598.5,"y":443},{"type":"lineTo","x":597.5,"y":449},{"type":"stroke","x":597.5,"y":449},{"type":"lineTo","x":597.5,"y":457},{"type":"stroke","x":597.5,"y":457},{"type":"lineTo","x":597.5,"y":464},{"type":"stroke","x":597.5,"y":464},{"type":"lineTo","x":597.5,"y":470},{"type":"stroke","x":597.5,"y":470},{"type":"lineTo","x":597.5,"y":478},{"type":"stroke","x":597.5,"y":478},{"type":"lineTo","x":598.5,"y":479},{"type":"stroke","x":598.5,"y":479},{"type":"lineTo","x":599.5,"y":481},{"type":"stroke","x":599.5,"y":481},{"type":"lineTo","x":600.5,"y":481},{"type":"stroke","x":600.5,"y":481},{"type":"lineTo","x":600.5,"y":482},{"type":"stroke","x":600.5,"y":482},{"type":"lineTo","x":601.5,"y":482},{"type":"stroke","x":601.5,"y":482},{"type":"lineTo","x":602.5,"y":482},{"type":"stroke","x":602.5,"y":482},{"type":"lineTo","x":603.5,"y":482},{"type":"stroke","x":603.5,"y":482},{"type":"lineTo","x":609.5,"y":480},{"type":"stroke","x":609.5,"y":480},{"type":"lineTo","x":617.5,"y":474},{"type":"stroke","x":617.5,"y":474},{"type":"lineTo","x":620.5,"y":470},{"type":"stroke","x":620.5,"y":470},{"type":"lineTo","x":622.5,"y":468},{"type":"stroke","x":622.5,"y":468},{"type":"lineTo","x":626.5,"y":460},{"type":"stroke","x":626.5,"y":460},{"type":"lineTo","x":627.5,"y":456},{"type":"stroke","x":627.5,"y":456},{"type":"lineTo","x":627.5,"y":444},{"type":"stroke","x":627.5,"y":444},{"type":"lineTo","x":625.5,"y":439},{"type":"stroke","x":625.5,"y":439},{"type":"lineTo","x":623.5,"y":433},{"type":"stroke","x":623.5,"y":433},{"type":"lineTo","x":621.5,"y":427},{"type":"stroke","x":621.5,"y":427},{"type":"lineTo","x":617.5,"y":419},{"type":"stroke","x":617.5,"y":419},{"type":"lineTo","x":615.5,"y":414},{"type":"stroke","x":615.5,"y":414},{"type":"lineTo","x":614.5,"y":413},{"type":"stroke","x":614.5,"y":413},{"type":"lineTo","x":614.5,"y":409},{"type":"stroke","x":614.5,"y":409},{"type":"lineTo","x":615.5,"y":405},{"type":"stroke","x":615.5,"y":405},{"type":"lineTo","x":616.5,"y":401},{"type":"stroke","x":616.5,"y":401},{"type":"lineTo","x":617.5,"y":400},{"type":"stroke","x":617.5,"y":400},{"type":"lineTo","x":618.5,"y":399},{"type":"stroke","x":618.5,"y":399},{"type":"lineTo","x":618.5,"y":398},{"type":"stroke","x":618.5,"y":398},{"type":"lineTo","x":618.5,"y":397},{"type":"stroke","x":618.5,"y":397},{"type":"lineTo","x":619.5,"y":397},{"type":"stroke","x":619.5,"y":397},{"type":"lineTo","x":619.5,"y":398},{"type":"stroke","x":619.5,"y":398},{"type":"lineTo","x":620.5,"y":400},{"type":"stroke","x":620.5,"y":400},{"type":"lineTo","x":621.5,"y":403},{"type":"stroke","x":621.5,"y":403},{"type":"lineTo","x":625.5,"y":409},{"type":"stroke","x":625.5,"y":409},{"type":"lineTo","x":627.5,"y":415},{"type":"stroke","x":627.5,"y":415},{"type":"lineTo","x":629.5,"y":421},{"type":"stroke","x":629.5,"y":421},{"type":"lineTo","x":630.5,"y":423},{"type":"stroke","x":630.5,"y":423},{"type":"lineTo","x":631.5,"y":423},{"type":"stroke","x":631.5,"y":423},{"type":"lineTo","x":631.5,"y":425},{"type":"stroke","x":631.5,"y":425},{"type":"lineTo","x":633.5,"y":429},{"type":"stroke","x":633.5,"y":429},{"type":"lineTo","x":635.5,"y":433},{"type":"stroke","x":635.5,"y":433},{"type":"lineTo","x":636.5,"y":435},{"type":"stroke","x":636.5,"y":435},{"type":"lineTo","x":637.5,"y":436},{"type":"stroke","x":637.5,"y":436},{"type":"lineTo","x":639.5,"y":440},{"type":"stroke","x":639.5,"y":440},{"type":"lineTo","x":640.5,"y":444},{"type":"stroke","x":640.5,"y":444},{"type":"lineTo","x":641.5,"y":446},{"type":"stroke","x":641.5,"y":446},{"type":"lineTo","x":642.5,"y":448},{"type":"stroke","x":642.5,"y":448},{"type":"lineTo","x":643.5,"y":448},{"type":"stroke","x":643.5,"y":448},{"type":"lineTo","x":643.5,"y":448},{"type":"stroke","x":643.5,"y":448},{"type":"lineTo","x":643.5,"y":447},{"type":"stroke","x":643.5,"y":447},{"type":"lineTo","x":644.5,"y":443},{"type":"stroke","x":644.5,"y":443},{"type":"lineTo","x":645.5,"y":440},{"type":"stroke","x":645.5,"y":440},{"type":"lineTo","x":645.5,"y":434},{"type":"stroke","x":645.5,"y":434},{"type":"lineTo","x":645.5,"y":428},{"type":"stroke","x":645.5,"y":428},{"type":"lineTo","x":645.5,"y":426},{"type":"stroke","x":645.5,"y":426},{"type":"lineTo","x":645.5,"y":418},{"type":"stroke","x":645.5,"y":418},{"type":"lineTo","x":644.5,"y":413},{"type":"stroke","x":644.5,"y":413},{"type":"lineTo","x":644.5,"y":411},{"type":"stroke","x":644.5,"y":411},{"type":"lineTo","x":644.5,"y":409},{"type":"stroke","x":644.5,"y":409},{"type":"lineTo","x":644.5,"y":409},{"type":"stroke","x":644.5,"y":409},{"type":"lineTo","x":644.5,"y":408},{"type":"stroke","x":644.5,"y":408},{"type":"lineTo","x":644.5,"y":408},{"type":"stroke","x":644.5,"y":408},{"type":"lineTo","x":644.5,"y":408},{"type":"stroke","x":644.5,"y":408},{"type":"lineTo","x":645.5,"y":408},{"type":"stroke","x":645.5,"y":408},{"type":"lineTo","x":645.5,"y":407},{"type":"stroke","x":645.5,"y":407},{"type":"lineTo","x":646.5,"y":407},{"type":"stroke","x":646.5,"y":407},{"type":"beginPath"},{"type":"moveTo","x":675.5,"y":373},{"type":"lineTo","x":676.5,"y":373},{"type":"stroke","x":676.5,"y":373},{"type":"lineTo","x":676.5,"y":374},{"type":"stroke","x":676.5,"y":374},{"type":"lineTo","x":677.5,"y":376},{"type":"stroke","x":677.5,"y":376},{"type":"lineTo","x":678.5,"y":381},{"type":"stroke","x":678.5,"y":381},{"type":"lineTo","x":679.5,"y":387},{"type":"stroke","x":679.5,"y":387},{"type":"lineTo","x":682.5,"y":397},{"type":"stroke","x":682.5,"y":397},{"type":"lineTo","x":683.5,"y":403},{"type":"stroke","x":683.5,"y":403},{"type":"lineTo","x":685.5,"y":417},{"type":"stroke","x":685.5,"y":417},{"type":"lineTo","x":686.5,"y":428},{"type":"stroke","x":686.5,"y":428},{"type":"lineTo","x":686.5,"y":438},{"type":"stroke","x":686.5,"y":438},{"type":"lineTo","x":687.5,"y":448},{"type":"stroke","x":687.5,"y":448},{"type":"lineTo","x":687.5,"y":452},{"type":"stroke","x":687.5,"y":452},{"type":"lineTo","x":689.5,"y":458},{"type":"stroke","x":689.5,"y":458},{"type":"lineTo","x":689.5,"y":459},{"type":"stroke","x":689.5,"y":459},{"type":"lineTo","x":689.5,"y":460},{"type":"stroke","x":689.5,"y":460},{"type":"lineTo","x":689.5,"y":460},{"type":"stroke","x":689.5,"y":460},{"type":"lineTo","x":689.5,"y":458},{"type":"stroke","x":689.5,"y":458},{"type":"lineTo","x":691.5,"y":443},{"type":"stroke","x":691.5,"y":443},{"type":"lineTo","x":692.5,"y":433},{"type":"stroke","x":692.5,"y":433},{"type":"lineTo","x":693.5,"y":427},{"type":"stroke","x":693.5,"y":427},{"type":"lineTo","x":695.5,"y":415},{"type":"stroke","x":695.5,"y":415},{"type":"lineTo","x":695.5,"y":403},{"type":"stroke","x":695.5,"y":403},{"type":"lineTo","x":696.5,"y":394},{"type":"stroke","x":696.5,"y":394},{"type":"lineTo","x":696.5,"y":382},{"type":"stroke","x":696.5,"y":382},{"type":"lineTo","x":696.5,"y":380},{"type":"stroke","x":696.5,"y":380},{"type":"lineTo","x":697.5,"y":376},{"type":"stroke","x":697.5,"y":376},{"type":"lineTo","x":698.5,"y":374},{"type":"stroke","x":698.5,"y":374},{"type":"lineTo","x":698.5,"y":374},{"type":"stroke","x":698.5,"y":374},{"type":"lineTo","x":699.5,"y":374},{"type":"stroke","x":699.5,"y":374},{"type":"lineTo","x":699.5,"y":374},{"type":"stroke","x":699.5,"y":374},{"type":"lineTo","x":700.5,"y":374},{"type":"stroke","x":700.5,"y":374},{"type":"lineTo","x":703.5,"y":377},{"type":"stroke","x":703.5,"y":377},{"type":"lineTo","x":705.5,"y":381},{"type":"stroke","x":705.5,"y":381},{"type":"lineTo","x":705.5,"y":383},{"type":"stroke","x":705.5,"y":383},{"type":"lineTo","x":707.5,"y":391},{"type":"stroke","x":707.5,"y":391},{"type":"lineTo","x":708.5,"y":396},{"type":"stroke","x":708.5,"y":396},{"type":"lineTo","x":709.5,"y":404},{"type":"stroke","x":709.5,"y":404},{"type":"lineTo","x":709.5,"y":410},{"type":"stroke","x":709.5,"y":410},{"type":"lineTo","x":710.5,"y":412},{"type":"stroke","x":710.5,"y":412},{"type":"lineTo","x":710.5,"y":414},{"type":"stroke","x":710.5,"y":414},{"type":"lineTo","x":710.5,"y":414},{"type":"stroke","x":710.5,"y":414},{"type":"lineTo","x":710.5,"y":413},{"type":"stroke","x":710.5,"y":413},{"type":"lineTo","x":711.5,"y":413},{"type":"stroke","x":711.5,"y":413},{"type":"lineTo","x":711.5,"y":412},{"type":"stroke","x":711.5,"y":412},{"type":"lineTo","x":711.5,"y":412},{"type":"stroke","x":711.5,"y":412},{"type":"lineTo","x":712.5,"y":412},{"type":"stroke","x":712.5,"y":412},{"type":"lineTo","x":712.5,"y":412},{"type":"stroke","x":712.5,"y":412},{"type":"lineTo","x":712.5,"y":411},{"type":"stroke","x":712.5,"y":411},{"type":"lineTo","x":712.5,"y":409},{"type":"stroke","x":712.5,"y":409},{"type":"lineTo","x":713.5,"y":408},{"type":"stroke","x":713.5,"y":408},{"type":"lineTo","x":713.5,"y":396},{"type":"stroke","x":713.5,"y":396},{"type":"lineTo","x":713.5,"y":392},{"type":"stroke","x":713.5,"y":392},{"type":"lineTo","x":713.5,"y":386},{"type":"stroke","x":713.5,"y":386},{"type":"lineTo","x":714.5,"y":374},{"type":"stroke","x":714.5,"y":374},{"type":"lineTo","x":717.5,"y":371},{"type":"stroke","x":717.5,"y":371},{"type":"lineTo","x":718.5,"y":371},{"type":"stroke","x":718.5,"y":371},{"type":"lineTo","x":718.5,"y":370},{"type":"stroke","x":718.5,"y":370},{"type":"lineTo","x":718.5,"y":370},{"type":"stroke","x":718.5,"y":370},{"type":"lineTo","x":719.5,"y":372},{"type":"stroke","x":719.5,"y":372},{"type":"lineTo","x":724.5,"y":377},{"type":"stroke","x":724.5,"y":377},{"type":"lineTo","x":731.5,"y":384},{"type":"stroke","x":731.5,"y":384},{"type":"lineTo","x":733.5,"y":385},{"type":"stroke","x":733.5,"y":385},{"type":"lineTo","x":739.5,"y":390},{"type":"stroke","x":739.5,"y":390},{"type":"lineTo","x":744.5,"y":394},{"type":"stroke","x":744.5,"y":394},{"type":"lineTo","x":747.5,"y":396},{"type":"stroke","x":747.5,"y":396},{"type":"lineTo","x":748.5,"y":397},{"type":"stroke","x":748.5,"y":397},{"type":"lineTo","x":748.5,"y":398},{"type":"stroke","x":748.5,"y":398},{"type":"lineTo","x":750.5,"y":399},{"type":"stroke","x":750.5,"y":399},{"type":"lineTo","x":751.5,"y":401},{"type":"stroke","x":751.5,"y":401},{"type":"lineTo","x":753.5,"y":405},{"type":"stroke","x":753.5,"y":405},{"type":"lineTo","x":753.5,"y":406},{"type":"stroke","x":753.5,"y":406},{"type":"lineTo","x":753.5,"y":408},{"type":"stroke","x":753.5,"y":408},{"type":"lineTo","x":753.5,"y":409},{"type":"stroke","x":753.5,"y":409},{"type":"lineTo","x":754.5,"y":411},{"type":"stroke","x":754.5,"y":411},{"type":"lineTo","x":754.5,"y":412},{"type":"stroke","x":754.5,"y":412},{"type":"lineTo","x":754.5,"y":412},{"type":"stroke","x":754.5,"y":412},{"type":"lineTo","x":754.5,"y":412},{"type":"stroke","x":754.5,"y":412},{"type":"lineTo","x":754.5,"y":412},{"type":"stroke","x":754.5,"y":412},{"type":"lineTo","x":754.5,"y":413},{"type":"stroke","x":754.5,"y":413},{"type":"lineTo","x":754.5,"y":413},{"type":"stroke","x":754.5,"y":413},{"type":"lineTo","x":754.5,"y":414},{"type":"stroke","x":754.5,"y":414},{"type":"beginPath"},{"type":"moveTo","x":912.5,"y":506},{"type":"lineTo","x":912.5,"y":507},{"type":"stroke","x":912.5,"y":507},{"type":"lineTo","x":912.5,"y":507},{"type":"stroke","x":912.5,"y":507},{"type":"lineTo","x":912.5,"y":509},{"type":"stroke","x":912.5,"y":509},{"type":"lineTo","x":912.5,"y":521},{"type":"stroke","x":912.5,"y":521},{"type":"lineTo","x":912.5,"y":531},{"type":"stroke","x":912.5,"y":531},{"type":"lineTo","x":912.5,"y":540},{"type":"stroke","x":912.5,"y":540},{"type":"lineTo","x":913.5,"y":546},{"type":"stroke","x":913.5,"y":546},{"type":"lineTo","x":914.5,"y":556},{"type":"stroke","x":914.5,"y":556},{"type":"lineTo","x":916.5,"y":566},{"type":"stroke","x":916.5,"y":566},{"type":"lineTo","x":917.5,"y":576},{"type":"stroke","x":917.5,"y":576},{"type":"lineTo","x":919.5,"y":587},{"type":"stroke","x":919.5,"y":587},{"type":"lineTo","x":919.5,"y":597},{"type":"stroke","x":919.5,"y":597},{"type":"lineTo","x":920.5,"y":607},{"type":"stroke","x":920.5,"y":607},{"type":"lineTo","x":922.5,"y":623},{"type":"stroke","x":922.5,"y":623},{"type":"lineTo","x":922.5,"y":629},{"type":"stroke","x":922.5,"y":629},{"type":"lineTo","x":922.5,"y":634},{"type":"stroke","x":922.5,"y":634},{"type":"lineTo","x":922.5,"y":635},{"type":"stroke","x":922.5,"y":635},{"type":"lineTo","x":922.5,"y":634},{"type":"stroke","x":922.5,"y":634},{"type":"lineTo","x":922.5,"y":634},{"type":"stroke","x":922.5,"y":634},{"type":"lineTo","x":922.5,"y":633},{"type":"stroke","x":922.5,"y":633},{"type":"lineTo","x":922.5,"y":631},{"type":"stroke","x":922.5,"y":631},{"type":"beginPath"},{"type":"moveTo","x":989.5,"y":487},{"type":"lineTo","x":988.5,"y":487},{"type":"stroke","x":988.5,"y":487},{"type":"lineTo","x":988.5,"y":488},{"type":"stroke","x":988.5,"y":488},{"type":"lineTo","x":988.5,"y":488},{"type":"stroke","x":988.5,"y":488},{"type":"lineTo","x":979.5,"y":495},{"type":"stroke","x":979.5,"y":495},{"type":"lineTo","x":969.5,"y":501},{"type":"stroke","x":969.5,"y":501},{"type":"lineTo","x":955.5,"y":507},{"type":"stroke","x":955.5,"y":507},{"type":"lineTo","x":939.5,"y":512},{"type":"stroke","x":939.5,"y":512},{"type":"lineTo","x":929.5,"y":515},{"type":"stroke","x":929.5,"y":515},{"type":"lineTo","x":912.5,"y":518},{"type":"stroke","x":912.5,"y":518},{"type":"lineTo","x":892.5,"y":521},{"type":"stroke","x":892.5,"y":521},{"type":"lineTo","x":874.5,"y":523},{"type":"stroke","x":874.5,"y":523},{"type":"lineTo","x":864.5,"y":524},{"type":"stroke","x":864.5,"y":524},{"type":"lineTo","x":854.5,"y":524},{"type":"stroke","x":854.5,"y":524},{"type":"lineTo","x":851.5,"y":524},{"type":"stroke","x":851.5,"y":524},{"type":"lineTo","x":850.5,"y":525},{"type":"stroke","x":850.5,"y":525},{"type":"lineTo","x":849.5,"y":525},{"type":"stroke","x":849.5,"y":525},{"type":"lineTo","x":849.5,"y":525},{"type":"stroke","x":849.5,"y":525},{"type":"lineTo","x":849.5,"y":526},{"type":"stroke","x":849.5,"y":526},{"type":"lineTo","x":845.5,"y":530},{"type":"stroke","x":845.5,"y":530},{"type":"lineTo","x":839.5,"y":536},{"type":"stroke","x":839.5,"y":536},{"type":"lineTo","x":837.5,"y":537},{"type":"stroke","x":837.5,"y":537},{"type":"lineTo","x":836.5,"y":538},{"type":"stroke","x":836.5,"y":538},{"type":"beginPath"},{"type":"moveTo","x":997.5,"y":549},{"type":"lineTo","x":998.5,"y":553},{"type":"stroke","x":998.5,"y":553},{"type":"lineTo","x":998.5,"y":554},{"type":"stroke","x":998.5,"y":554},{"type":"lineTo","x":999.5,"y":557},{"type":"stroke","x":999.5,"y":557},{"type":"lineTo","x":1002.5,"y":569},{"type":"stroke","x":1002.5,"y":569},{"type":"lineTo","x":1005.5,"y":579},{"type":"stroke","x":1005.5,"y":579},{"type":"lineTo","x":1008.5,"y":595},{"type":"stroke","x":1008.5,"y":595},{"type":"lineTo","x":1011.5,"y":611},{"type":"stroke","x":1011.5,"y":611},{"type":"lineTo","x":1012.5,"y":620},{"type":"stroke","x":1012.5,"y":620},{"type":"lineTo","x":1013.5,"y":624},{"type":"stroke","x":1013.5,"y":624},{"type":"lineTo","x":1014.5,"y":626},{"type":"stroke","x":1014.5,"y":626},{"type":"lineTo","x":1014.5,"y":627},{"type":"stroke","x":1014.5,"y":627},{"type":"lineTo","x":1014.5,"y":627},{"type":"stroke","x":1014.5,"y":627},{"type":"lineTo","x":1014.5,"y":627},{"type":"stroke","x":1014.5,"y":627},{"type":"lineTo","x":1014.5,"y":626},{"type":"stroke","x":1014.5,"y":626},{"type":"beginPath"},{"type":"moveTo","x":1013.5,"y":516},{"type":"lineTo","x":1013.5,"y":516},{"type":"stroke","x":1013.5,"y":516},{"type":"lineTo","x":1013.5,"y":517},{"type":"stroke","x":1013.5,"y":517},{"type":"lineTo","x":1011.5,"y":521},{"type":"stroke","x":1011.5,"y":521},{"type":"lineTo","x":1008.5,"y":526},{"type":"stroke","x":1008.5,"y":526},{"type":"lineTo","x":1006.5,"y":530},{"type":"stroke","x":1006.5,"y":530},{"type":"lineTo","x":1002.5,"y":535},{"type":"stroke","x":1002.5,"y":535},{"type":"lineTo","x":1001.5,"y":536},{"type":"stroke","x":1001.5,"y":536},{"type":"lineTo","x":1001.5,"y":536},{"type":"stroke","x":1001.5,"y":536},{"type":"lineTo","x":1001.5,"y":536},{"type":"stroke","x":1001.5,"y":536},{"type":"lineTo","x":1001.5,"y":535},{"type":"stroke","x":1001.5,"y":535},{"type":"lineTo","x":1002.5,"y":535},{"type":"stroke","x":1002.5,"y":535},{"type":"beginPath"},{"type":"moveTo","x":1053.5,"y":555},{"type":"lineTo","x":1053.5,"y":556},{"type":"stroke","x":1053.5,"y":556},{"type":"lineTo","x":1053.5,"y":556},{"type":"stroke","x":1053.5,"y":556},{"type":"lineTo","x":1054.5,"y":558},{"type":"stroke","x":1054.5,"y":558},{"type":"lineTo","x":1054.5,"y":564},{"type":"stroke","x":1054.5,"y":564},{"type":"lineTo","x":1055.5,"y":570},{"type":"stroke","x":1055.5,"y":570},{"type":"lineTo","x":1056.5,"y":578},{"type":"stroke","x":1056.5,"y":578},{"type":"lineTo","x":1058.5,"y":591},{"type":"stroke","x":1058.5,"y":591},{"type":"lineTo","x":1059.5,"y":603},{"type":"stroke","x":1059.5,"y":603},{"type":"lineTo","x":1062.5,"y":613},{"type":"stroke","x":1062.5,"y":613},{"type":"lineTo","x":1063.5,"y":615},{"type":"stroke","x":1063.5,"y":615},{"type":"lineTo","x":1063.5,"y":616},{"type":"stroke","x":1063.5,"y":616},{"type":"lineTo","x":1063.5,"y":615},{"type":"stroke","x":1063.5,"y":615},{"type":"lineTo","x":1063.5,"y":614},{"type":"stroke","x":1063.5,"y":614},{"type":"lineTo","x":1063.5,"y":614},{"type":"stroke","x":1063.5,"y":614},{"type":"lineTo","x":1063.5,"y":608},{"type":"stroke","x":1063.5,"y":608},{"type":"lineTo","x":1063.5,"y":600},{"type":"stroke","x":1063.5,"y":600},{"type":"lineTo","x":1064.5,"y":590},{"type":"stroke","x":1064.5,"y":590},{"type":"lineTo","x":1066.5,"y":580},{"type":"stroke","x":1066.5,"y":580},{"type":"lineTo","x":1067.5,"y":575},{"type":"stroke","x":1067.5,"y":575},{"type":"lineTo","x":1067.5,"y":571},{"type":"stroke","x":1067.5,"y":571},{"type":"lineTo","x":1068.5,"y":567},{"type":"stroke","x":1068.5,"y":567},{"type":"lineTo","x":1069.5,"y":561},{"type":"stroke","x":1069.5,"y":561},{"type":"lineTo","x":1069.5,"y":559},{"type":"stroke","x":1069.5,"y":559},{"type":"lineTo","x":1070.5,"y":558},{"type":"stroke","x":1070.5,"y":558},{"type":"lineTo","x":1070.5,"y":557},{"type":"stroke","x":1070.5,"y":557},{"type":"lineTo","x":1071.5,"y":556},{"type":"stroke","x":1071.5,"y":556},{"type":"lineTo","x":1071.5,"y":556},{"type":"stroke","x":1071.5,"y":556},{"type":"lineTo","x":1071.5,"y":556},{"type":"stroke","x":1071.5,"y":556},{"type":"lineTo","x":1072.5,"y":556},{"type":"stroke","x":1072.5,"y":556},{"type":"lineTo","x":1072.5,"y":556},{"type":"stroke","x":1072.5,"y":556},{"type":"lineTo","x":1072.5,"y":556},{"type":"stroke","x":1072.5,"y":556},{"type":"lineTo","x":1073.5,"y":557},{"type":"stroke","x":1073.5,"y":557},{"type":"lineTo","x":1079.5,"y":571},{"type":"stroke","x":1079.5,"y":571},{"type":"lineTo","x":1085.5,"y":587},{"type":"stroke","x":1085.5,"y":587},{"type":"lineTo","x":1090.5,"y":601},{"type":"stroke","x":1090.5,"y":601},{"type":"lineTo","x":1091.5,"y":606},{"type":"stroke","x":1091.5,"y":606},{"type":"lineTo","x":1093.5,"y":612},{"type":"stroke","x":1093.5,"y":612},{"type":"lineTo","x":1094.5,"y":613},{"type":"stroke","x":1094.5,"y":613},{"type":"lineTo","x":1094.5,"y":612},{"type":"stroke","x":1094.5,"y":612},{"type":"lineTo","x":1094.5,"y":611},{"type":"stroke","x":1094.5,"y":611},{"type":"lineTo","x":1102.5,"y":599},{"type":"stroke","x":1102.5,"y":599},{"type":"lineTo","x":1108.5,"y":591},{"type":"stroke","x":1108.5,"y":591},{"type":"lineTo","x":1112.5,"y":583},{"type":"stroke","x":1112.5,"y":583},{"type":"lineTo","x":1114.5,"y":577},{"type":"stroke","x":1114.5,"y":577},{"type":"lineTo","x":1117.5,"y":573},{"type":"stroke","x":1117.5,"y":573},{"type":"lineTo","x":1119.5,"y":571},{"type":"stroke","x":1119.5,"y":571},{"type":"lineTo","x":1119.5,"y":570},{"type":"stroke","x":1119.5,"y":570},{"type":"lineTo","x":1119.5,"y":570},{"type":"stroke","x":1119.5,"y":570},{"type":"lineTo","x":1119.5,"y":569},{"type":"stroke","x":1119.5,"y":569},{"type":"lineTo","x":1120.5,"y":569},{"type":"stroke","x":1120.5,"y":569},{"type":"lineTo","x":1120.5,"y":570},{"type":"stroke","x":1120.5,"y":570},{"type":"lineTo","x":1121.5,"y":570},{"type":"stroke","x":1121.5,"y":570},{"type":"lineTo","x":1124.5,"y":572},{"type":"stroke","x":1124.5,"y":572},{"type":"lineTo","x":1125.5,"y":573},{"type":"stroke","x":1125.5,"y":573},{"type":"lineTo","x":1129.5,"y":575},{"type":"stroke","x":1129.5,"y":575},{"type":"lineTo","x":1135.5,"y":577},{"type":"stroke","x":1135.5,"y":577},{"type":"lineTo","x":1136.5,"y":579},{"type":"stroke","x":1136.5,"y":579},{"type":"lineTo","x":1139.5,"y":585},{"type":"stroke","x":1139.5,"y":585},{"type":"lineTo","x":1141.5,"y":591},{"type":"stroke","x":1141.5,"y":591},{"type":"lineTo","x":1145.5,"y":606},{"type":"stroke","x":1145.5,"y":606},{"type":"lineTo","x":1150.5,"y":622},{"type":"stroke","x":1150.5,"y":622},{"type":"lineTo","x":1153.5,"y":630},{"type":"stroke","x":1153.5,"y":630},{"type":"lineTo","x":1154.5,"y":634},{"type":"stroke","x":1154.5,"y":634},{"type":"lineTo","x":1154.5,"y":633},{"type":"stroke","x":1154.5,"y":633},{"type":"lineTo","x":1154.5,"y":633},{"type":"stroke","x":1154.5,"y":633},{"type":"lineTo","x":1154.5,"y":633},{"type":"stroke","x":1154.5,"y":633},{"type":"lineTo","x":1154.5,"y":632},{"type":"stroke","x":1154.5,"y":632},{"type":"lineTo","x":1154.5,"y":631},{"type":"stroke","x":1154.5,"y":631},{"type":"lineTo","x":1154.5,"y":631},{"type":"stroke","x":1154.5,"y":631}]`,
      drawing_time: 12,
      svg: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1500" height="800"><defs/><g><path fill="none" stroke="none"/><path fill="none" stroke="black" paint-order="fill stroke markers" d=" M 175.5 112 L 175.5 113 L 175.5 113 L 176.5 113 L 176.5 114 L 176.5 120 L 177.5 127 L 177.5 133 L 178.5 143 L 178.5 157 L 178.5 171 L 178.5 192 L 180.5 206 L 181.5 210 L 184.5 224 L 187.5 236 L 193.5 253 L 196.5 265 L 198.5 269 L 200.5 273 L 200.5 273 L 200.5 274 L 200.5 274 L 200.5 274 L 200.5 274" stroke-miterlimit="10"/><path fill="none" stroke="black" paint-order="fill stroke markers" d=" M 234.5 111 L 234.5 112 L 234.5 113 L 237.5 127 L 240.5 141 L 243.5 150 L 248.5 162 L 252.5 176 L 254.5 188 L 255.5 192 L 258.5 205 L 258.5 223 L 258.5 245 L 256.5 271 L 255.5 285 L 255.5 299 L 255.5 299" stroke-miterlimit="10"/><path fill="none" stroke="black" paint-order="fill stroke markers" d=" M 257.5 191 L 257.5 192 L 256.5 192 L 254.5 193 L 248.5 196 L 247.5 196 L 237.5 198 L 225.5 199 L 211.5 199 L 205.5 199 L 196.5 199 L 184.5 199 L 182.5 200 L 181.5 200 L 181.5 200 L 180.5 200 L 180.5 200 L 178.5 200 L 174.5 201 L 173.5 201 L 171.5 201 L 169.5 202 L 169.5 201 L 169.5 201 L 169.5 200 L 169.5 200" stroke-miterlimit="10"/><path fill="none" stroke="black" paint-order="fill stroke markers" d=" M 321.5 198 L 321.5 198 L 321.5 198 L 321.5 204 L 321.5 212 L 321.5 220 L 321.5 228 L 321.5 229 L 321.5 237 L 321.5 241 L 321.5 249 L 321.5 255 L 322.5 262 L 322.5 266 L 323.5 267" stroke-miterlimit="10"/><path fill="none" stroke="black" paint-order="fill stroke markers" d=" M 319.5 154 L 319.5 154 L 319.5 155 L 319.5 155 L 319.5 156 L 320.5 156 L 320.5 162 L 320.5 168 L 320.5 169 L 320.5 169 L 320.5 171" stroke-miterlimit="10"/><path fill="none" stroke="black" paint-order="fill stroke markers" d=" M 430.5 331 L 430.5 335 L 430.5 336 L 431.5 342 L 434.5 354 L 439.5 367 L 440.5 379 L 445.5 399 L 450.5 415 L 455.5 431 L 460.5 451 L 463.5 460 L 469.5 474 L 473.5 486 L 476.5 494 L 476.5 495 L 476.5 495 L 476.5 496 L 476.5 496 L 476.5 495" stroke-miterlimit="10"/><path fill="none" stroke="black" paint-order="fill stroke markers" d=" M 627.5 398 L 626.5 398 L 626.5 399 L 621.5 405 L 616.5 410 L 614.5 411 L 611.5 417 L 605.5 425 L 601.5 435 L 598.5 443 L 597.5 449 L 597.5 457 L 597.5 464 L 597.5 470 L 597.5 478 L 598.5 479 L 599.5 481 L 600.5 481 L 600.5 482 L 601.5 482 L 602.5 482 L 603.5 482 L 609.5 480 L 617.5 474 L 620.5 470 L 622.5 468 L 626.5 460 L 627.5 456 L 627.5 444 L 625.5 439 L 623.5 433 L 621.5 427 L 617.5 419 L 615.5 414 L 614.5 413 L 614.5 409 L 615.5 405 L 616.5 401 L 617.5 400 L 618.5 399 L 618.5 398 L 618.5 397 L 619.5 397 L 619.5 398 L 620.5 400 L 621.5 403 L 625.5 409 L 627.5 415 L 629.5 421 L 630.5 423 L 631.5 423 L 631.5 425 L 633.5 429 L 635.5 433 L 636.5 435 L 637.5 436 L 639.5 440 L 640.5 444 L 641.5 446 L 642.5 448 L 643.5 448 L 643.5 448 L 643.5 447 L 644.5 443 L 645.5 440 L 645.5 434 L 645.5 428 L 645.5 426 L 645.5 418 L 644.5 413 L 644.5 411 L 644.5 409 L 644.5 409 L 644.5 408 L 644.5 408 L 644.5 408 L 645.5 408 L 645.5 407 L 646.5 407" stroke-miterlimit="10"/><path fill="none" stroke="black" paint-order="fill stroke markers" d=" M 675.5 373 L 676.5 373 L 676.5 374 L 677.5 376 L 678.5 381 L 679.5 387 L 682.5 397 L 683.5 403 L 685.5 417 L 686.5 428 L 686.5 438 L 687.5 448 L 687.5 452 L 689.5 458 L 689.5 459 L 689.5 460 L 689.5 460 L 689.5 458 L 691.5 443 L 692.5 433 L 693.5 427 L 695.5 415 L 695.5 403 L 696.5 394 L 696.5 382 L 696.5 380 L 697.5 376 L 698.5 374 L 698.5 374 L 699.5 374 L 699.5 374 L 700.5 374 L 703.5 377 L 705.5 381 L 705.5 383 L 707.5 391 L 708.5 396 L 709.5 404 L 709.5 410 L 710.5 412 L 710.5 414 L 710.5 414 L 710.5 413 L 711.5 413 L 711.5 412 L 711.5 412 L 712.5 412 L 712.5 412 L 712.5 411 L 712.5 409 L 713.5 408 L 713.5 396 L 713.5 392 L 713.5 386 L 714.5 374 L 717.5 371 L 718.5 371 L 718.5 370 L 718.5 370 L 719.5 372 L 724.5 377 L 731.5 384 L 733.5 385 L 739.5 390 L 744.5 394 L 747.5 396 L 748.5 397 L 748.5 398 L 750.5 399 L 751.5 401 L 753.5 405 L 753.5 406 L 753.5 408 L 753.5 409 L 754.5 411 L 754.5 412 L 754.5 412 L 754.5 412 L 754.5 412 L 754.5 413 L 754.5 413 L 754.5 414" stroke-miterlimit="10"/><path fill="none" stroke="black" paint-order="fill stroke markers" d=" M 912.5 506 L 912.5 507 L 912.5 507 L 912.5 509 L 912.5 521 L 912.5 531 L 912.5 540 L 913.5 546 L 914.5 556 L 916.5 566 L 917.5 576 L 919.5 587 L 919.5 597 L 920.5 607 L 922.5 623 L 922.5 629 L 922.5 634 L 922.5 635 L 922.5 634 L 922.5 634 L 922.5 633 L 922.5 631" stroke-miterlimit="10"/><path fill="none" stroke="black" paint-order="fill stroke markers" d=" M 989.5 487 L 988.5 487 L 988.5 488 L 988.5 488 L 979.5 495 L 969.5 501 L 955.5 507 L 939.5 512 L 929.5 515 L 912.5 518 L 892.5 521 L 874.5 523 L 864.5 524 L 854.5 524 L 851.5 524 L 850.5 525 L 849.5 525 L 849.5 525 L 849.5 526 L 845.5 530 L 839.5 536 L 837.5 537 L 836.5 538" stroke-miterlimit="10"/><path fill="none" stroke="black" paint-order="fill stroke markers" d=" M 997.5 549 L 998.5 553 L 998.5 554 L 999.5 557 L 1002.5 569 L 1005.5 579 L 1008.5 595 L 1011.5 611 L 1012.5 620 L 1013.5 624 L 1014.5 626 L 1014.5 627 L 1014.5 627 L 1014.5 627 L 1014.5 626" stroke-miterlimit="10"/><path fill="none" stroke="black" paint-order="fill stroke markers" d=" M 1013.5 516 L 1013.5 516 L 1013.5 517 L 1011.5 521 L 1008.5 526 L 1006.5 530 L 1002.5 535 L 1001.5 536 L 1001.5 536 L 1001.5 536 L 1001.5 535 L 1002.5 535" stroke-miterlimit="10"/><path fill="none" stroke="black" paint-order="fill stroke markers" d=" M 1053.5 555 L 1053.5 556 L 1053.5 556 L 1054.5 558 L 1054.5 564 L 1055.5 570 L 1056.5 578 L 1058.5 591 L 1059.5 603 L 1062.5 613 L 1063.5 615 L 1063.5 616 L 1063.5 615 L 1063.5 614 L 1063.5 614 L 1063.5 608 L 1063.5 600 L 1064.5 590 L 1066.5 580 L 1067.5 575 L 1067.5 571 L 1068.5 567 L 1069.5 561 L 1069.5 559 L 1070.5 558 L 1070.5 557 L 1071.5 556 L 1071.5 556 L 1071.5 556 L 1072.5 556 L 1072.5 556 L 1072.5 556 L 1073.5 557 L 1079.5 571 L 1085.5 587 L 1090.5 601 L 1091.5 606 L 1093.5 612 L 1094.5 613 L 1094.5 612 L 1094.5 611 L 1102.5 599 L 1108.5 591 L 1112.5 583 L 1114.5 577 L 1117.5 573 L 1119.5 571 L 1119.5 570 L 1119.5 570 L 1119.5 569 L 1120.5 569 L 1120.5 570 L 1121.5 570 L 1124.5 572 L 1125.5 573 L 1129.5 575 L 1135.5 577 L 1136.5 579 L 1139.5 585 L 1141.5 591 L 1145.5 606 L 1150.5 622 L 1153.5 630 L 1154.5 634 L 1154.5 633 L 1154.5 633 L 1154.5 633 L 1154.5 632 L 1154.5 631 L 1154.5 631" stroke-miterlimit="10"/></g></svg>`,
      created_at: '1659717845422.0',
      user_id: knex('users').first('id').where('username', 'john.doe'),
      png: await fs.readFile(path.resolve(__dirname, 'image1.png')),
    },
  ]);
};
