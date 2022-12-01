import PropTypes from 'prop-types';
import { FriendList, FriendListItem, FriendStatus, FriendPhoto, FriendName } from "./FriendList.styled"

export const ProfileFriends = ({ friends }) => {
    return <FriendList>
        {friends.map(friend => {
            return <FriendListItem key={friend.id} >
                {friend.isOnline ? <FriendStatus style={{ backgroundColor: "green" }} />
                    : <FriendStatus style={{ backgroundColor: "red" }} />}
                <FriendPhoto src={friend.avatar} />
                <FriendName>{friend.name}</FriendName>
            </FriendListItem>
        })}
    </FriendList>
}
// Пропы
ProfileFriends.propTypes = {
    friends: PropTypes.array.isRequired,
}


