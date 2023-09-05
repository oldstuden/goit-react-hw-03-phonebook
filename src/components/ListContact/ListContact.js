import { ItemButton, List, ListItem, Topic } from './ListContact.styled';

export const ListContact = ({ filter, onDeleteContact }) => {
  return (
    <div>
      <List>
        {filter.map(item => (
          <ListItem key={item.id}>
            <Topic>
              {item.name} : {item.number}
            </Topic>
            <ItemButton type="button" onClick={() => onDeleteContact(item.id)}>
              Delete
            </ItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
