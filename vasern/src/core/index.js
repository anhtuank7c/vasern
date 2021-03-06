
import { Queryable } from './vasern-queryable';
import { Vasern, Document } from './vasern';

Document.import(Queryable);

export default Document;
export { Vasern, Queryable };
export { EventSubscriber } from './vasern-subscriber';
export { Parser } from './vasern-parser';