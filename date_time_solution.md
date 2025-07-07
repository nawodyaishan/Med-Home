# Solution: Passing Time Information to Frontend

## Problem
The current code uses `rs.getDate()` which only returns the date part without time:

```java
activity.setCreatedDate(rs.getDate("CREATED_DATE"));
activity.setUpdatedDate(rs.getDate("UPDATED_DATE"));
```

## Solution
Replace `rs.getDate()` with `rs.getTimestamp()` to include both date and time:

```java
activity.setCreatedDate(rs.getTimestamp("CREATED_DATE"));
activity.setUpdatedDate(rs.getTimestamp("UPDATED_DATE"));
```

## Key Differences

### rs.getDate()
- Returns `java.sql.Date`
- Only includes date (year, month, day)
- Time is set to 00:00:00
- Example: "2025-07-07" (no time component)

### rs.getTimestamp()
- Returns `java.sql.Timestamp`
- Includes both date and time
- Preserves full datetime information from database
- Example: "2025-07-07 14:46:53.000"

## Additional Considerations

### 1. Update Entity/Model Class
Ensure your Activity class uses appropriate date/time types:

```java
public class Activity {
    private Timestamp createdDate;  // Instead of Date
    private Timestamp updatedDate;  // Instead of Date
    
    // Getters and setters
    public Timestamp getCreatedDate() { return createdDate; }
    public void setCreatedDate(Timestamp createdDate) { this.createdDate = createdDate; }
    
    public Timestamp getUpdatedDate() { return updatedDate; }
    public void setUpdatedDate(Timestamp updatedDate) { this.updatedDate = updatedDate; }
}
```

### 2. Frontend Considerations
When sending to frontend, you might want to format the timestamp:

```java
// For JSON response
SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
response.put("createdDate", formatter.format(activity.getCreatedDate()));
response.put("updatedDate", formatter.format(activity.getUpdatedDate()));
```

### 3. Database Column Types
Ensure your database columns support time information:
- Use `TIMESTAMP` or `DATETIME` instead of `DATE`
- MySQL: `DATETIME` or `TIMESTAMP`
- PostgreSQL: `TIMESTAMP`
- Oracle: `TIMESTAMP`

### 4. Alternative with Time Zones
If you need timezone information:

```java
// Using OffsetDateTime for timezone support
activity.setCreatedDate(rs.getObject("CREATED_DATE", OffsetDateTime.class));
activity.setUpdatedDate(rs.getObject("UPDATED_DATE", OffsetDateTime.class));
```

## Complete Example

```java
// Database query with proper result handling
public Activity getActivity(int id) {
    String sql = "SELECT ID, NAME, CREATED_DATE, UPDATED_DATE FROM activities WHERE ID = ?";
    
    try (PreparedStatement stmt = connection.prepareStatement(sql)) {
        stmt.setInt(1, id);
        ResultSet rs = stmt.executeQuery();
        
        if (rs.next()) {
            Activity activity = new Activity();
            activity.setId(rs.getInt("ID"));
            activity.setName(rs.getString("NAME"));
            
            // Use getTimestamp() to include time information
            activity.setCreatedDate(rs.getTimestamp("CREATED_DATE"));
            activity.setUpdatedDate(rs.getTimestamp("UPDATED_DATE"));
            
            return activity;
        }
    } catch (SQLException e) {
        // Handle exception
    }
    
    return null;
}
```

This solution will ensure that time information is properly passed to your frontend application.