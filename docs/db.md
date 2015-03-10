##entities

- shipment
  <has:
    - [unique_ID] id !
    - [string] dimension !
    - [string] src_addr !
    - [string] dst_addr !
    - [time] pickup_date !
    - [time] deliver_date !
    - [string] payment_type !
    - [string] state !
    - [user] sender !
    - [user] receiver
  >

- user
  <has:
    - [unique_ID] id !
    - [string] name !
    - [string] surname !
    - [string] email !
    - [string] password !
    - [string] addr !
    - [string] mobile_nr !
    - [date] birth_date !

    - [boolean] isPremium !
    - [string] premium_addr !
    - [set] premium_addr !
    - [set] premium_whorehouses !
    - [set] premium_factory !
    - [set client] 
    - [set transaction] 

- client
  <has:
    - [unique_ID] id !
    - [string] name !
    - [string] company name
    - [string] NIF !
    - [string] email !
    - [string] contact !
    - [set string] addrs !
    - [set transaction] history ! //for client`s history

- product
  <has:
    
  >

    
>
   
   

  > 
