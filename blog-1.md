
#Significance of Union and Intersection types.

Union and Intersection are two ways of combining types together to create a new type. 
A pipe sign (|) is used to denote union and an ampersand (&) is used for intersection.
As their names are different, they also serve different purposes. If we make a union of some types to create a new type then it will make such a type for which at least all properties of one of the parent must contain to the objects which are typed the new union type. For an object which type is an union of some other types, we must maintain rule:
no matter how many types are joined to create the new type we must fullfil at least one of the child types props and then we can add more properties from other child types. 

Suppose we have the following types:

type Type1 = {
    prop1: string;
    prop2: string;
}

type Type2 = {
    prop3: string;
    prop4: string;
}

type Type3 = {
    prop5: string;
    prop6: string;
}

type JoinedTypeByUnion = Type1 | Type2 | Type3;

const obj1: JoinedTypeByUnion = {
    prop1: 'value1',   
    prop3: 'value3',
    prop5:'value5'
}

We will get an error here. The reason of the error is although we have three properties in the obj1 object but no child types all properties are satisfied with data. To get rid from the error we can add at least one more property to the obj1 object. It could be prop2, prop4 or prop6. Or we can add all of them. 

Now  a question arise, what an intersection type is?
Intersection is an another way to create a new type from existing types. But for intersection, what happens is that the newly created type requires all the properties of all the subtypes otherwise it will show an error. 
Considering the previous example, let suppose we are creating a new type named JoinedTypeByIntersection

type JoinedTypeByIntersection = Type1 & Type2 & Type3;
If we create an object of this type it must supply all the properties of all subtypes. The only valid object will like this:
const obj2: JoinedTypeByIntersection  = {
    prop1:"value1",
    prop2:"value2",
    prop3:"value3",
    prop4:"value4",
    prop5:"value5",
    prop6:"value6",
}