import React from 'react';
import {  View, StyleSheet,ScrollView } from 'react-native';

function HomeScreen() {
    return (
    <View style={styles.container} >
        <ScrollView>
            <View style={[styles.parent]}>
                <View style={[styles.card, {backgroundColor: '#996666'} ]} />
                <View style={[styles.card, {backgroundColor: '#339966'} ]} />
                <View style={[styles.card, {backgroundColor: '#996633'} ]} />
                <View style={[styles.card, {backgroundColor: '#669933'} ]} />
                <View style={[styles.card, {backgroundColor: '#339966'} ]} />
                <View style={[styles.card, {backgroundColor: '#996633'} ]} />
                <View style={[styles.card, {backgroundColor: '#669933'} ]} />
            </View>
        </ScrollView>
    
            {/* <Image
                style={styles.product_img}
                source={{
                uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhIQEBAQEBITFREQEBAQERMREhIVFRUWFxURFRMYHSgiGRolHRcTIzEhJSkrLi4uGiAzODYsNygtMS0BCgoKDg0OGxAQGzAiHyY1KzUtLS0rNS03NTU3LS0tKzAtLS0tNTUtLy0tLS0tLSsvLS0tLSstLS01MS0tLTUtLv/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAgQDB//EAEUQAAIBAgQDBAYGBQoHAAAAAAABAgMRBBIhMQVBURMiYYEGMlJxkdEUI0KTseFTYpKhwTNUcnOClKKy0vAHJENjZIPC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EACkRAQACAgEDBAEDBQAAAAAAAAABAgMRIQQSMRMiQVEFFJGxIzJCUmH/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYuBkGLi4GQYuLgZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrIgOK8dlSclCKk4yUdU+qT297J+bPnvHZ4h1dI0lSc7ykpzVW19LK1t7X1Kct5r26+ZWUrE72kn6V1f0S/Zkav0tq3t2PLe0vhuQ7U/bqfeT+Zraft1PvJ/Mt2hpMy9Lav6JfCXzPfA+k85yalTUdLrSXVL+JXJ5vbqfeT+ZnCqspp0lGcmmn29WooqOl7WUtb26cyrNea0mYTx0ibREvo2ErZoqXVJnUcfCs3ZU8yipW1UW2vJs7Cys7rEoTGpAAScAAAAAAAAAAAAAAAAAAAAAAAAADDYGtaVot9E38EUXimIVnkyVJJxtDtEm9V/C/LkWXjFeUs9FaKUEpW3tNyjKz5OyeviVKHotQhONSDq54yzRvWm49HdN2ejeh5vVZ6RlrWZ8S2YKT2TP28PpVb+aw++/I1+lVf5rH738ixvBwf2rf2fzNHgafty/Z/M0fqsP+0KfSv9K5LFVP5qvvl8jfhuJqOtBSoKlG07z7VS1torfH4E8+H0/af7P5nHieEqpaMr5E814ycZXSaW3LV6FWfqMM45iLQnjx3i0cLdwqd4Kz2bX4HcVTgcYYWMoU02pNzak5S1SSerenLQtUWXdLlrfHGp8K81JrblkAGlUAAAAYAyAAAAAAAAAAAAAAGGBkGEzIGGatmZEL6XcepYHDVK9SVrK0VzbfT/AH0EzFY3JEbnTxqYmPaVJyfdWZLnpCLjp11UmvecOMx1Kms7nGMfak8sfK+r8ijcO47XxEVNU06su9CLT7PDQ+x3X61RrW72vbTVEjQ4M5PtK83Un7U3ovcuW/I8T9PfNeZmPl6HfWkRp21/Sem3amq1X+rhkj+27HkuN1Hthq3nWs/xO2ngoLSzeuV8ktL3923xOWrNqaSpUuzdrzdWF7rPmVr8rU/2vhpr+OpHmVc9TPxD0pcbS9eliqf62btV8M0v8pIYTiSndUqtOrbeEvq6i99lp5xXvOVUIP1f1VeElLVuzWnTQ8MRgYu10pWbUZLuyi+eWS1T9xG/47j28kdR9palKcpxlKnKmrTVpWfOGuaLaaeuz5FswFTNCL8LPy0/gULB8VrYd2m3VoveTV5x/pxXrLxWq8Sz8B4ipTcF6kkqlGad4y5Sjfqvw8znRxOLJNZ+TPPfXf0ngAeqxgAAGGZAAAAAAAAAAAAAAAMSMmGBiJsYiZA1m0k23ZLVvwPiHpBjZcYxeZP/AJOjJrDrdVHF2liWuavdR83zL5/xU4nOGGhhKUnGrjJ9hmW8KSTlWqeUE172iC4PgoUKbllyxhFOyTdkl3Yq3RJFGWZmYpCyka9zs4fw+FKKSjta6W+vNmmPpwpv6RUzTUbRetoU4yeWU7P7OXK5RWjy392YcUgoU6tWLhnTbbSkqUHtKc46KDaVpO3K9rM7mlJWdpRktt001+DRLcU9sHM8y58BiXUh30lUi5U6sVspx3tf7LTTXg0QGMUO1xbt3eyxEKbdsqq9nGVdJcm0oecZE3w/AOnd5nJuMYbaOMHLI2uclFqN+dloVz0j9LJUmsPhadKriZzy0o61KUo63blGyU01Zxb031Qru08G9J/g001Vtt2s3+1GEr/vNMPiXVqRllUo9+pSd2nTg45FVa2lnefKmtru/I64wjXo9YVYWcoOUU1JWdpaPqbYTDZMz3c5OTdrabRglySikkvmR3MSNqtJfwXNy01bRGOpVw0ozpN9nmzOm/VjN/aXS/5czrr8TprMleeT+VcH3aUV60p1NotK7tfNpojMXnjLPG2rjJcmuUkm726N2va9lewyV9SNx5h2s64Xzh2LVWnGok1mWsXvF80zpIf0Yf1KT9aLySftW9WXwt8ETBZS3dWJV2jU6AATcAAAAAAAAAAAAAAAAAAAQAA+aelH1/FGnrHDYeFOK5Z683KfnlpLyZIU491LTV3fecXbqrbvbocFSm/p3EJPniKUfKOEotf55HfVxCVSNKzu4OSeXTZ/avvo9LPltcz4+clpWz/bDwxmBhUee8qdRK0a1NqM0vZ2tKP6sk14HlwzByp5r5Vd6Rp3jSfPOqbvkbb1SdtL8yPpcWxTg2sO6kdFHFRhOEWmneosLL6ydmlovWvoyYwbvTg82e8YPPlcc+i72V7X3tyI2mRXfSdRxFFwnVr4OpSvVtCbhKcIp5rOL70bO+m2X3lcjwuhUjTjPE1qiSjOjJxrTbby2raJpy1pu73uuTaf0PHYKnVjlqRvbWL2lFraUZLVPxRXauGp4eSp14xrwzfV/VRzShJSzKSSUXKLs781N+LFM/pxzydu3D6H8Iw/0qtWVavUq0XJTp1G8lKVS9kr0437t7WbsuS0LrWpRnGUJK8ZKUZLwejOGjeF1Qwkaak7yb7OjmftOME7v3s9HTxMt6lKmtdIQcn8ZO37iGTN3zxBFdNMJwqEVHPapl9SGVRpU7bZKS0T8Xd+JIOOluWySWnvvyIDGZ4TyyxNTRKSvXw1Ba3/AOnJa7dLeZ28OxUnGXeda0oLSrCrlunfWhC3LaS89i3FM75JhP8ACuJdjmcleORvzg/k/wBxa4yur9dSh13aFR+zSxEvhRke/DOO1ZVlT7RqEanYrLDM3lnkSd+rWrt4+IxTqZr/ANcvG+V2ABoVgAAAAAAAAAAAAAAAAAAAACrcQ4daviJ20m6VS/WTg6b/AMNNHHVoxzxnlvJJwUssbpO11maulotEy08QpXTtu4tabvnb8V5lXzZk9m1yu0rrbXp5dDPX25Jj7W+aouPBaK54jT/y8V+CqHVh4RglTi9IKMbOTlJJLS7eu1tWcGOxc6sITw8pyp1NnSg4VXLdRzVNKUWrvM43stNZRHCOGSpNybhHMrOlSV47p5qlWffq1N+87bvQhauuHUp+ZpVpprVX+VtUbr5j8itx44WWmV6uPdb6r7L81bzudC+Zyz7sk+T7r833X5PT+0dCalmV07XjJJ6ptbO2ztY5HLrSjOnPM45ZOLySdldNcnz6nrlXSN31Su7c14q5GYjh84tdk29oQldKrSWy7zVqlNezLXxO/BVpSc000oNQTlZZna7bjZOL2fTVWNOONcuSzXoOcK0VvKjWgvfVSpR/eyy4LgNCnPtYqaldyazyy3e7y7b6nBwCgprtN41JKS/q6fqvzlZlkI9P7t2cv9AANKsAAAAAAAAAAAAAAAAAAAAAa1I3TW3R9OjKbxKl2VR1VpCUmqkeVOolqn0TVmn0tskr3QgfSeLpx+kKOemrQxVL2qTelRPlKDd79G+iazdRSdd9fMLMc86Q1HDQhmcIqKnJznqkk9XKT5t+/wDckeOPrqlTlUackleMVvNvSMFfm20vM6aFJRipUpdpSez5x/Va6rp8OSXljKNSVpUakY697NeSl9m1+i1drbpeN+Y8tM0b+UrVmsoPgeGn2lSo5bOcKko6KvXbXay8YU8sacP6Mj3x/EKlN1YpQzWoPD3T7zqT7O0rPW0rbW0aJaNCMI2jDJGKlLLBd2Ot8qS56vREdxajRjUpV6s3HsXOyUZSTco3SdumW68bE/Tnfhzb1wknUjNTyu1SrT0TinGMnFc3q0cPDb0qqpO8n3aU7XbcLSdCu17lKEn1SJXA0MuazclOpOd8tlFy1t7tN/E3xGBlUjrLs01Fzt61tc0XJNcno+TV9TsY9eXNvZK+i997Xi9dV7/966nhiPrJrC02lZZsRNbUaXOPhKS5dHyujlfEpVPqsDaVv5TGTs6VNfakntUnzv6t9ddUe/orGNWu6OHbeGw7VTFV2254nES1hTb9lazet33FtJ3z5cvfPpY1kV1HdK74OkoxikrKySXRLZHuAbKUilYrCiZ2AAk4AAAAAAAAAAAAAAAAABAAAANK9KM4yhJJxknGSezTVmjcwwPl2HqTwtaVOU5xUZSg2oqamk+65RbXJ7772LBTxNKSzqaW1502/LNB95e6SaPL0wwSu6iW8o3+BXKNCcnZRbfKyd/I+ftMVvMa+fh6cV7qxK20pOWsJU6q/VdpP3tO1/7KPGv2+ywkZ72vXXNWe9Po38SB+hV7WyTte+z3dtdvBGrw+JW3bLwTZbHUZI/yn9kJwwmqjxz1dPDYde1UnOr+GQ4MVh6T1xWIlif+3dU6H7MbKX+JkdLC1t5Ko/F/NHhVg47prxe/xIXzXt5mf4TrirDw9MvSDs6C7O9m5QhQhDKpySi46LWS1e6Wz0PpPoPwZ4TBUaM9arXa4iXOVWp3p+SbyrwiilcD4ZGvUhmV1GpHdX6XPqUVZW395s/H61MxDP1XExDIAPSZAAAAAAAAAAAAAAAAAAAAgAAAAGJGQBE8TheMuT3vZPb3laxjqU8lS86jzOMYQoxzd6L17ur0XQuGLp3RWOM1KijFzjDIpL1FJzbs0u6vf+4wZ6f1qWaMVvZMPCnxWv8AosR/d6nyPWXE636Cv/dqv8IkasVT5xn91U/0m30mh0kv/VV/0mxU7HxKr+hr/wB3rf6DkrYitWqKEL0rQnJuvhajg9YJWzZXffbxH0qh1f3dRf8AydeAxMZS+pgqtk86blTyptWd3HXZ6Gfqo3ilbinV4TfozgZKDnWlSqTzd2dKm6UbJLTLmd3e+vyJ05+HxtTj3cul2r3tfXc6C3p6RTHEQryW7rTIAC5WAAAAAAAAAAAAAAAAAAAAAAMGQAAA0qxuivcVwcn6ra1uvDcshq4LoQtSLaSrbSiSoVFvNean8jekusoPyl/GJdnQj7K+Bj6ND2V8DujarUqSfOP7yRwWEmndRWvN3S8rEyqEfZXwN0jl6RaNSRbTEFol4I2AJogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==",
                }}
            /> */}
            
         
      
      
    
    </View>
    
    );
  }
  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft:20,
        marginRight:20, 
    },

    product_img: {
        width: '100%',
        height: '70%%',  
    },
 
    parent: {
        width: '100%', 
        flexDirection: 'row', 
        flexWrap: 'wrap'
    },
    card: {
        width: '48%', 
        height:230,
        margin: '1%', 
        aspectRatio: 1,
    }

  });