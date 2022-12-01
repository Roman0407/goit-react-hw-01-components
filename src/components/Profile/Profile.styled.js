import styled from 'styled-components';
export const ProfileItem = styled.div`
  width: 300px;
  margin: 0 auto 50px;
  background-colr: white;
  border: 1px solid black;
  // padding-top:40px;
  border-radius: 5px;
  overflow: hidden;
`;
export const ProfileDescription = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const ProfilePhoto = styled.img`
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid black;
`;
export const UserName = styled.p`
  font-weight: bold;
  font-size: 15px;
  margin-top: 5px;
`;
export const UserStatus = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  background-color: rgb(200, 200, 200);
`;
export const StatusItem = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid gray;
  span {
    text-align: center;
  }
  span:last-child {
    font-weight: bold;
    font-size: 15px;
  }
`;
