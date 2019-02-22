import { getQuery } from './untils';
describe('getQuery tests', () => {
  it('positive test', () => {
    expect(getQuery({ search: 'test', limit: 10 })).toEqual(
      '?search=test&limit=10&',
    );
  });

  it('positive test', () => {
    expect(getQuery({ search: '', limit: '' })).toEqual('?search=&limit=&');
  });

  it('negative test', () => {
    expect(getQuery({ search: 'test', limit: 10 })).not.toEqual(
      '?search=test1&limit=10',
    );
  });

  it('positive test', () => {
    expect(getQuery({})).toEqual('?');
  });

  it('negative test', () => {
    expect(getQuery({ search: 'test' })).not.toEqual('?');
  });
});
