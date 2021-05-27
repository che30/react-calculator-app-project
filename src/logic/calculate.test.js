import Calculate from './calculate';
describe('Calculate method', ()=>{
  it('displays very first click if number',()=>{
    expect(Calculate({total:null,next:null,operation:null},'1')).toEqual({ total: '1', next: null, operation: null });
    
  })
  it('sums two numbers',()=>{
   expect(Calculate({total:'1',next:null,operation:'+'},'1')).toEqual({ total: '1', next: '1', operation: '+' });
    
  })
  it('sums concatenate numbers',()=>{
    expect(Calculate({total:'1',next:null,operation:null},'1')).toEqual({ total: '11', next: null, operation: null });
     
   })
   it('initialise all variables to null when AC pressed',()=>{
    expect(Calculate({total:'1',next:'2',operation:'-'},'AC')).toEqual({ total: null, next: null, operation: null });
     
   })
   it('sum and returns result on equals',()=>{
    expect(Calculate({total:'1',next:'2',operation:'-'},'=')).toEqual({ total: '-1', next: null, operation: null });
     
   })
   
   

})